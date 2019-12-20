'use strict';





//init···


//init···

let gl = {}

class GLProgram {
    constructor ( vertexShader, fragmentShader) {
        this.uniforms = {};
        this.program = gl.createProgram();

        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
            throw gl.getProgramInfoLog(this.program);

        const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            const uniformName = gl.getActiveUniform(this.program, i).name;
            this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName);
        }
    }

    bind () {
        gl.useProgram(this.program)
    }
}

class fluidWallPaper {
    constructor() {
        this.canvas = {}
        this.config = {}
        this.pointers = []
        this.splatStack = []
        this.bloomFramebuffers = []
        this.ext = {}
        this.gl = {}
        this.clearProgram               = {}
        this.colorProgram               = {}
        this.backgroundProgram          = {}
        this.displayProgram             = {}
        this.displayBloomProgram        = {}
        this.displayShadingProgram      = {}
        this.displayBloomShadingProgram = {}
        this.bloomPrefilterProgram      = {}
        this.bloomBlurProgram           = {}
        this.bloomFinalProgram          = {}
        this.splatProgram               = {}
        this.advectionProgram           = {}
        this.divergenceProgram          = {}
        this.curlProgram                = {}
        this.vorticityProgram           = {}
        this.pressureProgram            = {}
        this.gradienSubtractProgram     = {}
        this.blit = {}
        this.simWidth = ''
        this.simHeight = ''
        this.dyeWidth = ''
        this.dyeHeight = ''
        this.density = ''
        this.velocity = ''
        this.divergence = ''
        this.curl = ''
        this.pressure = ''
        this.bloom = ''
        this.ditheringTexture = {}
        this.lastColorChangeTime = ''
        this.pointerPrototype = {
            id : -1,
            x : 0,
            y : 0,
            dx : 0,
            dy : 0,
            down : false,
            moved : false,
            color : [30, 0, 300]
        }
    }

    init(){
        // this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvas = document.getElementById('canv')
        console.log(this.canvas)
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;

        this.config = {
            SIM_RESOLUTION: 256,
            DYE_RESOLUTION: 1024,
            DENSITY_DISSIPATION: 0.97,
            VELOCITY_DISSIPATION: 0.98,
            PRESSURE_DISSIPATION: 0.8,
            PRESSURE_ITERATIONS: 20,
            CURL: 30,
            SPLAT_RADIUS: 0.3,
            SHADING: true,
            COLORFUL: true,
            PAUSED: false,
            BACK_COLOR: { r: 0, g: 0, b: 0 },
            TRANSPARENT: false,
            BLOOM: true,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.8,
            BLOOM_THRESHOLD: 0.6,
            BLOOM_SOFT_KNEE: 0.7,
            POINTER_COLOR: { r: 0, g: 0.15, b: 0 },
            SOUND_SENSITIVITY: 0.25,
            NORMALIZE_VOLUME: true,
            AUDIO_RESPONSIVE: true
        }

        // document.addEventListener("DOMContentLoaded", () => {   
        //     window.wallpaperPropertyListener = {
        //         applyUserProperties: (properties) => {
        //             if (properties.bloom_intensity) this.config.BLOOM_INTENSITY = properties.bloom_intensity.value;
        //             if (properties.bloom_threshold) this.config.BLOOM_THRESHOLD = properties.bloom_threshold.value;
        //             if (properties.colorful) this.config.COLORFUL = properties.colorful.value;
        //             if (properties.density_diffusion) this.config.DENSITY_DISSIPATION = properties.density_diffusion.value;
        //             if (properties.enable_bloom) this.config.BLOOM = properties.enable_bloom.value;
        //             if (properties.paused) this.config.PAUSED = properties.paused.value;
        //             if (properties.pressure_diffusion) this.config.PRESSURE_DISSIPATION = properties.pressure_diffusion.value;
        //             if (properties.shading) this.config.SHADING = properties.shading.value;
        //             if (properties.splat_radius) this.config.SPLAT_RADIUS = properties.splat_radius.value;
        //             if (properties.velocity_diffusion) this.config.VELOCITY_DISSIPATION = properties.velocity_diffusion.value;
        //             if (properties.vorticity) this.config.CURL = properties.vorticity.value;
        //             if (properties.sound_sensitivity) this.config.SOUND_SENSITIVITY = properties.sound_sensitivity.value;
        //             if (properties.normalize_volume) this.config.NORMALIZE_VOLUME = properties.normalize_volume.value;
        //             if (properties.audio_responsive) this.config.AUDIO_RESPONSIVE = properties.audio_responsive.value;
        //             if (properties.simulation_resolution) {
        //                 this.config.SIM_RESOLUTION = properties.simulation_resolution.value;
        //                 this.initFramebuffers();
        //             }
        //             if (properties.dye_resolution) {
        //                 this.config.DYE_RESOLUTION = properties.dye_resolution.value;
        //                 this.initFramebuffers();
        //             }
        //             if (properties.default_color) {
        //                 let c = properties.default_color.value.split(" ");
        //                 console.log(this.RGBToHue(c[0], c[1], c[2]));
        //                 c = this.HSVtoRGB(this.RGBToHue(c[0], c[1], c[2])/360, 1.0, 1.0);
        //                 c.r *= 0.15;
        //                 c.g *= 0.15;
        //                 c.b *= 0.15;
        //                 this.config.POINTER_COLOR = c;
        //             }
        //         }
        //     };

        //     window.wallpaperRegisterAudioListener((audioArray) => {
        //         if (!this.config.AUDIO_RESPONSIVE) return;
        //         if (String(audioArray[0]).startsWith("5.17")) return;
                
        //         if (this.config.NORMALIZE_VOLUME) {
        //             let maxIndex = this.indexOfMax(audioArray);
        //             let percent = 1.0 / audioArray[maxIndex];
                    
        //             for (let i = 0; i < audioArray.length; i++) {
        //                 audioArray[i] *= percent;
        //             }
        //         }

        //         let bass = 0.0;

        //         for (let i = 0; i < 10; i++) {
        //             bass += audioArray[i];
        //         }
        //         bass /= 9;
        //         // if (bass >= this.config.SOUND_SENSITIVITY) this.multipleSplats(parseInt(Math.random() * 20) + 5);
        //         if (this.config.NORMALIZE_VOLUME) {
        //             this.multipleSplats(parseInt((bass * this.config.SOUND_SENSITIVITY) * 10));
        //         } else {
        //             this.multipleSplats(parseInt((bass * this.config.SOUND_SENSITIVITY * 2) * 10));
        //         }
        //     });
        // });


        this.pointers.push( this.pointerPrototype );

        const { gll, ext } = this.getWebGLContext(this.canvas);
        this.ext = ext;
        gl = gll

        if (this.isMobile())
            this.config.SHADING = false;
        if (!this.ext.supportLinearFiltering)
        {
            this.config.SHADING = false;
            this.config.BLOOM = false;
        }

        // this.startGUI();

        const baseVertexShader = this.compileShader(gl.VERTEX_SHADER, `
            precision highp float;

            attribute vec2 aPosition;
            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform vec2 texelSize;

            void main () {
                vUv = aPosition * 0.5 + 0.5;
                vL = vUv - vec2(texelSize.x, 0.0);
                vR = vUv + vec2(texelSize.x, 0.0);
                vT = vUv + vec2(0.0, texelSize.y);
                vB = vUv - vec2(0.0, texelSize.y);
                gl_Position = vec4(aPosition, 0.0, 1.0);
            }
        `);

        const clearShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            uniform sampler2D uTexture;
            uniform float value;

            void main () {
                gl_FragColor = value * texture2D(uTexture, vUv);
            }
        `);

        const colorShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;

            uniform vec4 color;

            void main () {
                gl_FragColor = color;
            }
        `);

        const backgroundShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;
            uniform float aspectRatio;

            #define SCALE 25.0

            void main () {
                vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
                float v = mod(uv.x + uv.y, 2.0);
                v = v * 0.1 + 0.8;
                gl_FragColor = vec4(vec3(v), 1.0);
            }
        `);

        const displayShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;

            void main () {
                vec3 C = texture2D(uTexture, vUv).rgb;
                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `);

        const displayBloomShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;
            uniform sampler2D uBloom;
            uniform sampler2D uDithering;
            uniform vec2 ditherScale;

            void main () {
                vec3 C = texture2D(uTexture, vUv).rgb;
                vec3 bloom = texture2D(uBloom, vUv).rgb;
                vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
                noise = noise * 2.0 - 1.0;
                bloom += noise / 800.0;
                bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
                C += bloom;
                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `);

        const displayShadingShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;
            uniform vec2 texelSize;

            void main () {
                vec3 L = texture2D(uTexture, vL).rgb;
                vec3 R = texture2D(uTexture, vR).rgb;
                vec3 T = texture2D(uTexture, vT).rgb;
                vec3 B = texture2D(uTexture, vB).rgb;
                vec3 C = texture2D(uTexture, vUv).rgb;

                float dx = length(R) - length(L);
                float dy = length(T) - length(B);

                vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                vec3 l = vec3(0.0, 0.0, 1.0);

                float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                C.rgb *= diffuse;

                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `);

        const displayBloomShadingShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;
            uniform sampler2D uBloom;
            uniform sampler2D uDithering;
            uniform vec2 ditherScale;
            uniform vec2 texelSize;

            void main () {
                vec3 L = texture2D(uTexture, vL).rgb;
                vec3 R = texture2D(uTexture, vR).rgb;
                vec3 T = texture2D(uTexture, vT).rgb;
                vec3 B = texture2D(uTexture, vB).rgb;
                vec3 C = texture2D(uTexture, vUv).rgb;

                float dx = length(R) - length(L);
                float dy = length(T) - length(B);

                vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                vec3 l = vec3(0.0, 0.0, 1.0);

                float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                C *= diffuse;

                vec3 bloom = texture2D(uBloom, vUv).rgb;
                vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
                noise = noise * 2.0 - 1.0;
                bloom += noise / 800.0;
                bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
                C += bloom;

                float a = max(C.r, max(C.g, C.b));
                gl_FragColor = vec4(C, a);
            }
        `);

        const bloomPrefilterShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTexture;
            uniform vec3 curve;
            uniform float threshold;

            void main () {
                vec3 c = texture2D(uTexture, vUv).rgb;
                float br = max(c.r, max(c.g, c.b));
                float rq = clamp(br - curve.x, 0.0, curve.y);
                rq = curve.z * rq * rq;
                c *= max(rq, br - threshold) / max(br, 0.0001);
                gl_FragColor = vec4(c, 0.0);
            }
        `);

        const bloomBlurShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;

            void main () {
                vec4 sum = vec4(0.0);
                sum += texture2D(uTexture, vL);
                sum += texture2D(uTexture, vR);
                sum += texture2D(uTexture, vT);
                sum += texture2D(uTexture, vB);
                sum *= 0.25;
                gl_FragColor = sum;
            }
        `);

        const bloomFinalShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;
            uniform float intensity;

            void main () {
                vec4 sum = vec4(0.0);
                sum += texture2D(uTexture, vL);
                sum += texture2D(uTexture, vR);
                sum += texture2D(uTexture, vT);
                sum += texture2D(uTexture, vB);
                sum *= 0.25;
                gl_FragColor = sum * intensity;
            }
        `);

        const splatShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uTarget;
            uniform float aspectRatio;
            uniform vec3 color;
            uniform vec2 point;
            uniform float radius;

            void main () {
                vec2 p = vUv - point.xy;
                p.x *= aspectRatio;
                vec3 splat = exp(-dot(p, p) / radius) * color;
                vec3 base = texture2D(uTarget, vUv).xyz;
                gl_FragColor = vec4(base + splat, 1.0);
            }
        `);

        const advectionManualFilteringShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uVelocity;
            uniform sampler2D uSource;
            uniform vec2 texelSize;
            uniform vec2 dyeTexelSize;
            uniform float dt;
            uniform float dissipation;

            vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
                vec2 st = uv / tsize - 0.5;

                vec2 iuv = floor(st);
                vec2 fuv = fract(st);

                vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
                vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
                vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
                vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

                return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
            }

            void main () {
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
                gl_FragColor.a = 1.0;
            }
        `);

        const advectionShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            uniform sampler2D uVelocity;
            uniform sampler2D uSource;
            uniform vec2 texelSize;
            uniform float dt;
            uniform float dissipation;

            void main () {
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                gl_FragColor = dissipation * texture2D(uSource, coord);
                gl_FragColor.a = 1.0;
            }
        `);

        const divergenceShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uVelocity;

            void main () {
                float L = texture2D(uVelocity, vL).x;
                float R = texture2D(uVelocity, vR).x;
                float T = texture2D(uVelocity, vT).y;
                float B = texture2D(uVelocity, vB).y;

                vec2 C = texture2D(uVelocity, vUv).xy;
                if (vL.x < 0.0) { L = -C.x; }
                if (vR.x > 1.0) { R = -C.x; }
                if (vT.y > 1.0) { T = -C.y; }
                if (vB.y < 0.0) { B = -C.y; }

                float div = 0.5 * (R - L + T - B);
                gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
            }
        `);

        const curlShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uVelocity;

            void main () {
                float L = texture2D(uVelocity, vL).y;
                float R = texture2D(uVelocity, vR).y;
                float T = texture2D(uVelocity, vT).x;
                float B = texture2D(uVelocity, vB).x;
                float vorticity = R - L - T + B;
                gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
            }
        `);

        const vorticityShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;

            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uVelocity;
            uniform sampler2D uCurl;
            uniform float curl;
            uniform float dt;

            void main () {
                float L = texture2D(uCurl, vL).x;
                float R = texture2D(uCurl, vR).x;
                float T = texture2D(uCurl, vT).x;
                float B = texture2D(uCurl, vB).x;
                float C = texture2D(uCurl, vUv).x;

                vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
                force /= length(force) + 0.0001;
                force *= curl * C;
                force.y *= -1.0;

                vec2 vel = texture2D(uVelocity, vUv).xy;
                gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
            }
        `);

        const pressureShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uPressure;
            uniform sampler2D uDivergence;

            vec2 boundary (vec2 uv) {
                return uv;
                // uncomment if you use wrap or repeat texture mode
                // uv = min(max(uv, 0.0), 1.0);
                // return uv;
            }

            void main () {
                float L = texture2D(uPressure, boundary(vL)).x;
                float R = texture2D(uPressure, boundary(vR)).x;
                float T = texture2D(uPressure, boundary(vT)).x;
                float B = texture2D(uPressure, boundary(vB)).x;
                float C = texture2D(uPressure, vUv).x;
                float divergence = texture2D(uDivergence, vUv).x;
                float pressure = (L + R + B + T - divergence) * 0.25;
                gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
            }
        `);

        const gradientSubtractShader = this.compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;

            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uPressure;
            uniform sampler2D uVelocity;

            vec2 boundary (vec2 uv) {
                return uv;
                // uv = min(max(uv, 0.0), 1.0);
                // return uv;
            }

            void main () {
                float L = texture2D(uPressure, boundary(vL)).x;
                float R = texture2D(uPressure, boundary(vR)).x;
                float T = texture2D(uPressure, boundary(vT)).x;
                float B = texture2D(uPressure, boundary(vB)).x;
                vec2 velocity = texture2D(uVelocity, vUv).xy;
                velocity.xy -= vec2(R - L, T - B);
                gl_FragColor = vec4(velocity, 0.0, 1.0);
            }
        `);

        this.clearProgram               = new GLProgram( baseVertexShader, clearShader);
        this.colorProgram               = new GLProgram( baseVertexShader, colorShader);
        this.backgroundProgram          = new GLProgram( baseVertexShader, backgroundShader);
        this.displayProgram             = new GLProgram( baseVertexShader, displayShader);
        this.displayBloomProgram        = new GLProgram( baseVertexShader, displayBloomShader);
        this.displayShadingProgram      = new GLProgram( baseVertexShader, displayShadingShader);
        this.displayBloomShadingProgram = new GLProgram( baseVertexShader, displayBloomShadingShader);
        this.bloomPrefilterProgram      = new GLProgram( baseVertexShader, bloomPrefilterShader);
        this.bloomBlurProgram           = new GLProgram( baseVertexShader, bloomBlurShader);
        this.bloomFinalProgram          = new GLProgram( baseVertexShader, bloomFinalShader);
        this.splatProgram               = new GLProgram( baseVertexShader, splatShader);
        this.advectionProgram           = new GLProgram( baseVertexShader, this.ext.supportLinearFiltering ? advectionShader : advectionManualFilteringShader);
        this.divergenceProgram          = new GLProgram( baseVertexShader, divergenceShader);
        this.curlProgram                = new GLProgram( baseVertexShader, curlShader);
        this.vorticityProgram           = new GLProgram( baseVertexShader, vorticityShader);
        this.pressureProgram            = new GLProgram( baseVertexShader, pressureShader);
        this.gradienSubtractProgram     = new GLProgram( baseVertexShader, gradientSubtractShader);


        this.blit = (() => {
            gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
            gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(0);

            return (destination) => {
                gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
                gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
            }
        })();


        this.ditheringTexture = this.createTextureAsync(require('./LDR_RGB1_0.png'));


        this.initFramebuffers();
        this.multipleSplats(parseInt(Math.random() * 20) + 5);

        this.lastColorChangeTime = Date.now();

        this.update();

        this.initEventListener()
    }

    indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }

        return maxIndex;
    }

    


    getWebGLContext (canvas) {
        const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };

        let gll = this.canvas.getContext('webgl2', params);
        const isWebGL2 = !!gll;
        if (!isWebGL2)
            gll = this.canvas.getContext('webgl', params) || this.canvas.getContext('experimental-webgl', params);

        let halfFloat;
        let supportLinearFiltering;
        if (isWebGL2) {
            gll.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = gll.getExtension('OES_texture_float_linear');
        } else {
            halfFloat = gll.getExtension('OES_texture_half_float');
            supportLinearFiltering = gll.getExtension('OES_texture_half_float_linear');
        }

        gll.clearColor(0.0, 0.0, 0.0, 1.0);

        const halfFloatTexType = isWebGL2 ? gll.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
        let formatRGBA;
        let formatRG;
        let formatR;

        if (isWebGL2)
        {
            formatRGBA = this.getSupportedFormat(gll, gll.RGBA16F, gll.RGBA, halfFloatTexType);
            formatRG = this.getSupportedFormat(gll, gll.RG16F, gll.RG, halfFloatTexType);
            formatR = this.getSupportedFormat(gll, gll.R16F, gll.RED, halfFloatTexType);
        }
        else
        {
            formatRGBA = this.getSupportedFormat(gll, gll.RGBA, gll.RGBA, halfFloatTexType);
            formatRG = this.getSupportedFormat(gll, gll.RGBA, gll.RGBA, halfFloatTexType);
            formatR = this.getSupportedFormat(gll, gll.RGBA, gll.RGBA, halfFloatTexType);
        }

        return {
            gll,
            ext: {
                formatRGBA,
                formatRG,
                formatR,
                halfFloatTexType,
                supportLinearFiltering
            }
        };
    }

    getSupportedFormat (gl, internalFormat, format, type)
    {
        if (!this.supportRenderTextureFormat(gl, internalFormat, format, type))
        {
            switch (internalFormat)
            {
                case gl.R16F:
                    return this.getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                case gl.RG16F:
                    return this.getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                default:
                    return null;
            }
        }

        return {
            internalFormat,
            format
        }
    }

    supportRenderTextureFormat (gl, internalFormat, format, type) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status != gl.FRAMEBUFFER_COMPLETE)
            return false;
        return true;
    }

    startGUI () {
        var gui = new dat.GUI({ width: 300 });
        gui.add(this.config, 'SIM_RESOLUTION', { '32': 32, '64': 64, '128': 128, '256': 256 }).name('sim resolution').onFinishChange(this.initFramebuffers);
        gui.add(this.config, 'DYE_RESOLUTION', { '128': 128, '256': 256, '512': 512, '1024': 1024 }).name('dye resolution').onFinishChange(this.initFramebuffers);
        gui.add(this.config, 'DENSITY_DISSIPATION', 0.9, 1.0).name('density diffusion');
        gui.add(this.config, 'VELOCITY_DISSIPATION', 0.9, 1.0).name('velocity diffusion');
        gui.add(this.config, 'PRESSURE_DISSIPATION', 0.0, 1.0).name('pressure diffusion');
        gui.add(this.config, 'CURL', 0, 50).name('vorticity').step(1);
        gui.add(this.config, 'SPLAT_RADIUS', 0.01, 1.0).name('splat radius');
        gui.add(this.config, 'SHADING').name('shading');
        gui.add(this.config, 'COLORFUL').name('colorful');
        gui.add(this.config, 'PAUSED').name('paused').listen();

        gui.add({ fun: () => {
            this.splatStack.push(parseInt(Math.random() * 20) + 5);
        } }, 'fun').name('Random splats');

        let bloomFolder = gui.addFolder('Bloom');
        bloomFolder.add(this.config, 'BLOOM').name('enabled');
        bloomFolder.add(this.config, 'BLOOM_INTENSITY', 0.1, 2.0).name('intensity');
        bloomFolder.add(this.config, 'BLOOM_THRESHOLD', 0.0, 1.0).name('threshold');

        let captureFolder = gui.addFolder('Capture');
        captureFolder.addColor(this.config, 'BACK_COLOR').name('background color');
        captureFolder.add(this.config, 'TRANSPARENT').name('transparent');
        // captureFolder.add({ fun: this.captureScreenshot }, 'fun').name('take screenshot');

        let github = gui.add({ fun : () => {
            window.open('https://github.com/PavelDoGreat/WebGL-Fluid-Simulation');
        } }, 'fun').name('Github');
        github.__li.className = 'cr function bigFont';
        github.__li.style.borderLeft = '3px solid #8C8C8C';
        let githubIcon = document.createElement('span');
        github.domElement.parentElement.appendChild(githubIcon);
        githubIcon.className = 'icon github';

        let twitter = gui.add({ fun : () => {
            window.open('https://twitter.com/PavelDoGreat');
        } }, 'fun').name('Twitter');
        twitter.__li.className = 'cr function bigFont';
        twitter.__li.style.borderLeft = '3px solid #8C8C8C';
        let twitterIcon = document.createElement('span');
        twitter.domElement.parentElement.appendChild(twitterIcon);
        twitterIcon.className = 'icon twitter';

        let discord = gui.add({ fun : () => {
            window.open('https://discordapp.com/invite/CeqZDDE');
        } }, 'fun').name('Discord');
        discord.__li.className = 'cr function bigFont';
        discord.__li.style.borderLeft = '3px solid #8C8C8C';
        let discordIcon = document.createElement('span');
        discord.domElement.parentElement.appendChild(discordIcon);
        discordIcon.className = 'icon discord';

        let app = gui.add({ fun : () => {
            window.open('http://onelink.to/5b58bn');
        } }, 'fun').name('Check out new improved version');
        app.__li.className = 'cr function appBigFont';
        app.__li.style.borderLeft = '3px solid #00FF7F';
        let appIcon = document.createElement('span');
        app.domElement.parentElement.appendChild(appIcon);
        appIcon.className = 'icon app';

        if (this.isMobile())
            gui.close();
    }

    captureScreenshot () {
        this.colorProgram.bind();
        gl.uniform4f(this.colorProgram.uniforms.color, 0, 0, 0, 1);
        this.blit(this.density.write.fbo);

        this.render(this.density.write.fbo);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.density.write.fbo);

        let length = this.dyeWidth * this.dyeHeight * 4;
        let pixels = new Float32Array(length);
        gl.readPixels(0, 0, this.dyeWidth, this.dyeHeight, gl.RGBA, gl.FLOAT, pixels);

        let newPixels = new Uint8Array(length);

        let id = 0;
        for (let i = this.dyeHeight - 1; i >= 0; i--) {
            for (let j = 0; j < this.dyeWidth; j++) {
                let nid = i * this.dyeWidth * 4 + j * 4;
                newPixels[nid + 0] = this.clamp01(pixels[id + 0]) * 255;
                newPixels[nid + 1] = this.clamp01(pixels[id + 1]) * 255;
                newPixels[nid + 2] = this.clamp01(pixels[id + 2]) * 255;
                newPixels[nid + 3] = this.clamp01(pixels[id + 3]) * 255;
                id += 4;
            }
        }

        let captureCanvas = document.createElement('canvas');
        let ctx = captureCanvas.getContext('2d');
        captureCanvas.width = this.dyeWidth;
        captureCanvas.height = this.dyeHeight;

        let imageData = ctx.createImageData(this.dyeWidth, this.dyeHeight);
        imageData.data.set(newPixels);
        ctx.putImageData(imageData, 0, 0);
        let datauri = captureCanvas.toDataURL();

        this.downloadURI("fluid.png", datauri);

        URL.revokeObjectURL(datauri);
    }

    clamp01 (input) {
        return Math.min(Math.max(input, 0), 1);
    }

    downloadURI (filename, uri) {
        let link = document.createElement("a");
        link.download = filename;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    isMobile () {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    compileShader (type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
            throw gl.getShaderInfoLog(shader);

        return shader;
    }

    initFramebuffers () {
        let simRes = this.getResolution(this.config.SIM_RESOLUTION);
        let dyeRes = this.getResolution(this.config.DYE_RESOLUTION);

        this.simWidth  = simRes.width;
        this.simHeight = simRes.height;
        this.dyeWidth  = dyeRes.width;
        this.dyeHeight = dyeRes.height;

        const texType = this.ext.halfFloatTexType;
        const rgba    = this.ext.formatRGBA;
        const rg      = this.ext.formatRG;
        const r       = this.ext.formatR;
        const filtering = this.ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;


        if (!this.density) {
            this.density = this.createDoubleFBO(this.dyeWidth, this.dyeHeight, rgba.internalFormat, rgba.format, texType, filtering);
        }
        else {
            this.density = this.resizeDoubleFBO(this.density, this.dyeWidth, this.dyeHeight, rgba.internalFormat, rgba.format, texType, filtering);
        }

        if (!this.velocity) {
            this.velocity = this.createDoubleFBO(this.simWidth, this.simHeight, rg.internalFormat, rg.format, texType, filtering);
        }
        else {
            this.velocity = this.resizeDoubleFBO(this.velocity, this.simWidth, this.simHeight, rg.internalFormat, rg.format, texType, filtering);
        }

        this.divergence = this.createFBO      (this.simWidth, this.simHeight, r.internalFormat, r.format, texType, gl.NEAREST);
        this.curl       = this.createFBO      (this.simWidth, this.simHeight, r.internalFormat, r.format, texType, gl.NEAREST);
        this.pressure   = this.createDoubleFBO(this.simWidth, this.simHeight, r.internalFormat, r.format, texType, gl.NEAREST);

        this.initBloomFramebuffers();
    }

    initBloomFramebuffers () {
        let res = this.getResolution(this.config.BLOOM_RESOLUTION);

        const texType = this.ext.halfFloatTexType;
        const rgba = this.ext.formatRGBA;
        const filtering = this.ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

        this.bloom = this.createFBO(res.width, res.height, rgba.internalFormat, rgba.format, texType, filtering);

        this.bloomFramebuffers.length = 0;
        for (let i = 0; i < this.config.BLOOM_ITERATIONS; i++)
        {
            let width = res.width >> (i + 1);
            let height = res.height >> (i + 1);

            if (width < 2 || height < 2) break;

            let fbo = this.createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
            this.bloomFramebuffers.push(fbo);
        }
    }

    createFBO (w, h, internalFormat, format, type, param) {
        gl.activeTexture(gl.TEXTURE0);
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.viewport(0, 0, w, h);
        gl.clear(gl.COLOR_BUFFER_BIT);

        return {
            texture,
            fbo,
            width: w,
            height: h,
            attach (id) {
                gl.activeTexture(gl.TEXTURE0 + id);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                return id;
            }
        };
    }

    createDoubleFBO (w, h, internalFormat, format, type, param) {
        let fbo1 = this.createFBO(w, h, internalFormat, format, type, param);
        let fbo2 = this.createFBO(w, h, internalFormat, format, type, param);

        return {
            get read () {
                return fbo1;
            },
            set read (value) {
                fbo1 = value;
            },
            get write () {
                return fbo2;
            },
            set write (value) {
                fbo2 = value;
            },
            swap () {
                let temp = fbo1;
                fbo1 = fbo2;
                fbo2 = temp;
            }
        }
    }

    resizeFBO (target, w, h, internalFormat, format, type, param) {
        let newFBO = this.createFBO(w, h, internalFormat, format, type, param);
        this.clearProgram.bind();
        gl.uniform1i(this.clearProgram.uniforms.uTexture, target.attach(0));
        gl.uniform1f(this.clearProgram.uniforms.value, 1);
        this.blit(newFBO.fbo);
        return newFBO;
    }

    resizeDoubleFBO (target, w, h, internalFormat, format, type, param) {
        target.read = this.resizeFBO(target.read, w, h, internalFormat, format, type, param);
        target.write = this.createFBO(w, h, internalFormat, format, type, param);
        return target;
    }

    createTextureAsync (url) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

        let obj = {
            texture,
            width: 1,
            height: 1,
            attach (id) {
                gl.activeTexture(gl.TEXTURE0 + id);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                return id;
            }
        };

        let image = new Image();
        image.onload = () => {
            obj.width = image.width;
            obj.height = image.height;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        };
        image.src = url;

        return obj;
    }

    update () {
        this.resizeCanvas()
        this.input()
        if (!this.config.PAUSED){
            this.step(0.016);
        }
        this.render(null);
        requestAnimationFrame(this.update.bind(this));
        // requestAnimationFrame(() => this.update())  //这样写也可以
    }

    input () {
        if (this.splatStack.length > 0){
            this.multipleSplats(this.splatStack.pop());
        }

        for (let i = 0; i < this.pointers.length; i++) {
            const p = this.pointers[i];
            if (p.moved) {
                this.splat(p.x, p.y, p.dx, p.dy, p.color);
                p.moved = false;
            }
        }

        if (!this.config.COLORFUL){
            return;
        }

        if (this.lastColorChangeTime + 100 < Date.now())
        {
            this.lastColorChangeTime = Date.now();
            for (let i = 0; i < this.pointers.length; i++) {
                const p = this.pointers[i];
                p.color = this.generateColor();
            }
        }
    }

    step (dt) {
        gl.disable(gl.BLEND);
        gl.viewport(0, 0, this.simWidth, this.simHeight);

        this.curlProgram.bind();
        gl.uniform2f(this.curlProgram.uniforms.texelSize, 1.0 / this.simWidth, 1.0 / this.simHeight);
        gl.uniform1i(this.curlProgram.uniforms.uVelocity, this.velocity.read.attach(0));
        this.blit(this.curl.fbo);

        this.vorticityProgram.bind();
        gl.uniform2f(this.vorticityProgram.uniforms.texelSize, 1.0 / this.simWidth, 1.0 / this.simHeight);
        gl.uniform1i(this.vorticityProgram.uniforms.uVelocity, this.velocity.read.attach(0));
        gl.uniform1i(this.vorticityProgram.uniforms.uCurl, this.curl.attach(1));
        gl.uniform1f(this.vorticityProgram.uniforms.curl, this.config.CURL);
        gl.uniform1f(this.vorticityProgram.uniforms.dt, dt);
        this.blit(this.velocity.write.fbo);
        this.velocity.swap();

        this.divergenceProgram.bind();
        gl.uniform2f(this.divergenceProgram.uniforms.texelSize, 1.0 / this.simWidth, 1.0 / this.simHeight);
        gl.uniform1i(this.divergenceProgram.uniforms.uVelocity, this.velocity.read.attach(0));
        this.blit(this.divergence.fbo);

        this.clearProgram.bind();
        gl.uniform1i(this.clearProgram.uniforms.uTexture, this.pressure.read.attach(0));
        gl.uniform1f(this.clearProgram.uniforms.value, this.config.PRESSURE_DISSIPATION);
        this.blit(this.pressure.write.fbo);
        this.pressure.swap();

        this.pressureProgram.bind();
        gl.uniform2f(this.pressureProgram.uniforms.texelSize, 1.0 / this.simWidth, 1.0 / this.simHeight);
        gl.uniform1i(this.pressureProgram.uniforms.uDivergence, this.divergence.attach(0));
        for (let i = 0; i < this.config.PRESSURE_ITERATIONS; i++) {
            gl.uniform1i(this.pressureProgram.uniforms.uPressure, this.pressure.read.attach(1));
            this.blit(this.pressure.write.fbo);
            this.pressure.swap();
        }

        this.gradienSubtractProgram.bind();
        gl.uniform2f(this.gradienSubtractProgram.uniforms.texelSize, 1.0 / this.simWidth, 1.0 / this.simHeight);
        gl.uniform1i(this.gradienSubtractProgram.uniforms.uPressure, this.pressure.read.attach(0));
        gl.uniform1i(this.gradienSubtractProgram.uniforms.uVelocity, this.velocity.read.attach(1));
        this.blit(this.velocity.write.fbo);
        this.velocity.swap();

        this.advectionProgram.bind();
        gl.uniform2f(this.advectionProgram.uniforms.texelSize, 1.0 / this.simWidth, 1.0 / this.simHeight);
        if (!this.ext.supportLinearFiltering)
            gl.uniform2f(this.advectionProgram.uniforms.dyeTexelSize, 1.0 / this.simWidth, 1.0 / this.simHeight);
        let velocityId = this.velocity.read.attach(0);
        gl.uniform1i(this.advectionProgram.uniforms.uVelocity, velocityId);
        gl.uniform1i(this.advectionProgram.uniforms.uSource, velocityId);
        gl.uniform1f(this.advectionProgram.uniforms.dt, dt);
        gl.uniform1f(this.advectionProgram.uniforms.dissipation, this.config.VELOCITY_DISSIPATION);
        this.blit(this.velocity.write.fbo);
        this.velocity.swap();

        gl.viewport(0, 0, this.dyeWidth, this.dyeHeight);

        if (!this.ext.supportLinearFiltering)
            gl.uniform2f(this.advectionProgram.uniforms.dyeTexelSize, 1.0 / this.dyeWidth, 1.0 / this.dyeHeight);
        gl.uniform1i(this.advectionProgram.uniforms.uVelocity, this.velocity.read.attach(0));
        gl.uniform1i(this.advectionProgram.uniforms.uSource, this.density.read.attach(1));
        gl.uniform1f(this.advectionProgram.uniforms.dissipation, this.config.DENSITY_DISSIPATION);
        this.blit(this.density.write.fbo);
        this.density.swap();
    }

    render (target) {
        if (this.config.BLOOM)
            this.applyBloom(this.density.read, this.bloom);

        if (target == null || !this.config.TRANSPARENT) {
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);
        }
        else {
            gl.disable(gl.BLEND);
        }

        let width  = target == null ? gl.drawingBufferWidth : this.dyeWidth;
        let height = target == null ? gl.drawingBufferHeight : this.dyeHeight;

        gl.viewport(0, 0, width, height);

        if (!this.config.TRANSPARENT) {
            this.colorProgram.bind();
            let bc = this.config.BACK_COLOR;
            gl.uniform4f(this.colorProgram.uniforms.color, bc.r / 255, bc.g / 255, bc.b / 255, 1);
            this.blit(target);
        }

        if (target == null && this.config.TRANSPARENT) {
            this.backgroundProgram.bind();
            gl.uniform1f(this.backgroundProgram.uniforms.aspectRatio, this.canvas.width / this.canvas.height);
            this.blit(null);
        }

        if (this.config.SHADING) {
            let program = this.config.BLOOM ? this.displayBloomShadingProgram : this.displayShadingProgram;
            program.bind();
            gl.uniform2f(program.uniforms.texelSize, 1.0 / width, 1.0 / height);
            gl.uniform1i(program.uniforms.uTexture, this.density.read.attach(0));
            if (this.config.BLOOM) {
                gl.uniform1i(program.uniforms.uBloom, this.bloom.attach(1));
                gl.uniform1i(program.uniforms.uDithering, this.ditheringTexture.attach(2));
                let scale = this.getTextureScale(this.ditheringTexture, width, height);
                gl.uniform2f(program.uniforms.ditherScale, scale.x, scale.y);
            }
        }
        else {
            let program = this.config.BLOOM ? this.displayBloomProgram : this.displayProgram;
            program.bind();
            gl.uniform1i(program.uniforms.uTexture, this.density.read.attach(0));
            if (this.config.BLOOM) {
                gl.uniform1i(program.uniforms.uBloom, this.bloom.attach(1));
                gl.uniform1i(program.uniforms.uDithering, this.ditheringTexture.attach(2));
                let scale = this.getTextureScale(this.ditheringTexture, width, height);
                gl.uniform2f(program.uniforms.ditherScale, scale.x, scale.y);
            }
        }

        this.blit(target);
    }

    applyBloom (source, destination) {
        if (this.bloomFramebuffers.length < 2)
            return;

        let last = destination;

        gl.disable(gl.BLEND);
        this.bloomPrefilterProgram.bind();
        let knee = this.config.BLOOM_THRESHOLD * this.config.BLOOM_SOFT_KNEE + 0.0001;
        let curve0 = this.config.BLOOM_THRESHOLD - knee;
        let curve1 = knee * 2;
        let curve2 = 0.25 / knee;
        gl.uniform3f(this.bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
        gl.uniform1f(this.bloomPrefilterProgram.uniforms.threshold, this.config.BLOOM_THRESHOLD);
        gl.uniform1i(this.bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
        gl.viewport(0, 0, last.width, last.height);
        this.blit(last.fbo);

        this.bloomBlurProgram.bind();
        for (let i = 0; i < this.bloomFramebuffers.length; i++) {
            let dest = this.bloomFramebuffers[i];
            gl.uniform2f(this.bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
            gl.uniform1i(this.bloomBlurProgram.uniforms.uTexture, last.attach(0));
            gl.viewport(0, 0, dest.width, dest.height);
            this.blit(dest.fbo);
            last = dest;
        }

        gl.blendFunc(gl.ONE, gl.ONE);
        gl.enable(gl.BLEND);

        for (let i = this.bloomFramebuffers.length - 2; i >= 0; i--) {
            let baseTex = this.bloomFramebuffers[i];
            gl.uniform2f(this.bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
            gl.uniform1i(this.bloomBlurProgram.uniforms.uTexture, last.attach(0));
            gl.viewport(0, 0, baseTex.width, baseTex.height);
            this.blit(baseTex.fbo);
            last = baseTex;
        }

        gl.disable(gl.BLEND);
        this.bloomFinalProgram.bind();
        gl.uniform2f(this.bloomFinalProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
        gl.uniform1i(this.bloomFinalProgram.uniforms.uTexture, last.attach(0));
        gl.uniform1f(this.bloomFinalProgram.uniforms.intensity, this.config.BLOOM_INTENSITY);
        gl.viewport(0, 0, destination.width, destination.height);
        this.blit(destination.fbo);
    }

    splat (x, y, dx, dy, color) {
        gl.viewport(0, 0, this.simWidth, this.simHeight);
        this.splatProgram.bind();
        gl.uniform1i(this.splatProgram.uniforms.uTarget, this.velocity.read.attach(0));
        gl.uniform1f(this.splatProgram.uniforms.aspectRatio, this.canvas.width / this.canvas.height);
        gl.uniform2f(this.splatProgram.uniforms.point, x / this.canvas.width, 1.0 - y / this.canvas.height);
        gl.uniform3f(this.splatProgram.uniforms.color, dx, -dy, 1.0);
        gl.uniform1f(this.splatProgram.uniforms.radius, this.config.SPLAT_RADIUS / 100.0);
        this.blit(this.velocity.write.fbo);
        this.velocity.swap();

        gl.viewport(0, 0, this.dyeWidth, this.dyeHeight);
        gl.uniform1i(this.splatProgram.uniforms.uTarget, this.density.read.attach(0));
        gl.uniform3f(this.splatProgram.uniforms.color, color.r, color.g, color.b);
        this.blit(this.density.write.fbo);
        this.density.swap();
    }

    multipleSplats (amount) {
        for (let i = 0; i < amount; i++) {
            const color = this.generateColor();
            color.r *= 10.0;
            color.g *= 10.0;
            color.b *= 10.0;
            const x = this.canvas.width * Math.random();
            const y = this.canvas.height * Math.random();
            const dx = 1000 * (Math.random() - 0.5);
            const dy = 1000 * (Math.random() - 0.5);
            this.splat(x, y, dx, dy, color);
        }
    }

    resizeCanvas () {
        if (this.canvas.width != this.canvas.clientWidth || this.canvas.height != this.canvas.clientHeight) {
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            this.initFramebuffers();
        }
    }

    generateColor () {
        let c = this.HSVtoRGB(Math.random(), 1.0, 1.0);
        c.r *= 0.15;
        c.g *= 0.15;
        c.b *= 0.15;
        return c;
    }

    HSVtoRGB (h, s, v) {
        let r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return {
            r,
            g,
            b
        };
    }

    RGBToHue(r, g, b) {
      // Find greatest and smallest channel values
      let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;

      // Calculate hue
      // No difference
      if (delta == 0)
        h = 0;
      // Red is max
      else if (cmax == r)
        h = ((g - b) / delta) % 6;
      // Green is max
      else if (cmax == g)
        h = (b - r) / delta + 2;
      // Blue is max
      else
        h = (r - g) / delta + 4;

      h = Math.round(h * 60);
        
      // Make negative hues positive behind 360°
      if (h < 0)
          h += 360;

      return h;
    }

    getResolution (resolution) {
        let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
        if (aspectRatio < 1)
            aspectRatio = 1.0 / aspectRatio;

        let max = Math.round(resolution * aspectRatio);
        let min = Math.round(resolution);

        if (gl.drawingBufferWidth > gl.drawingBufferHeight)
            return { width: max, height: min };
        else
            return { width: min, height: max };
    }

    getTextureScale (texture, width, height) {
        return {
            x: width / texture.width,
            y: height / texture.height
        };
    }

    initEventListener (){
        this.canvas.addEventListener('mousemove', e => {
            this.pointers[0].moved = this.pointers[0].down;
            this.pointers[0].dx = (e.offsetX - this.pointers[0].x) * 5.0;
            this.pointers[0].dy = (e.offsetY - this.pointers[0].y) * 5.0;
            this.pointers[0].x = e.offsetX;
            this.pointers[0].y = e.offsetY;
        });

        this.canvas.addEventListener('touchmove', e => {
            e.preventDefault();
            const touches = e.targetTouches;
            for (let i = 0; i < touches.length; i++) {
                let pointer = this.pointers[i];
                pointer.moved = pointer.down;
                pointer.dx = (touches[i].pageX - pointer.x) * 8.0;
                pointer.dy = (touches[i].pageY - pointer.y) * 8.0;
                pointer.x = touches[i].pageX;
                pointer.y = touches[i].pageY;
            }
        }, false);

        this.canvas.addEventListener('mouseenter', () => {
            this.pointers[0].down = true;
            this.pointers[0].color = this.config.POINTER_COLOR;
        });

        this.canvas.addEventListener('touchstart', e => {
            e.preventDefault();
            const touches = e.targetTouches;
            for (let i = 0; i < touches.length; i++) {
                if (i >= this.pointers.length)
                    this.pointers.push( this.pointerPrototype );

                this.pointers[i].id = touches[i].identifier;
                this.pointers[i].down = true;
                this.pointers[i].x = touches[i].pageX;
                this.pointers[i].y = touches[i].pageY;
                this.pointers[i].color = this.config.POINTER_COLOR;
            }
        });

        this.canvas.addEventListener("mousedown", () => {
            this.multipleSplats(parseInt(Math.random() * 20) + 5);
        });

        window.addEventListener('mouseleave', () => {
            this.pointers[0].down = false;
        });

        window.addEventListener('touchend', e => {
            const touches = e.changedTouches;
            for (let i = 0; i < touches.length; i++)
                for (let j = 0; j < this.pointers.length; j++)
                    if (touches[i].identifier == this.pointers[j].id)
                        this.pointers[j].down = false;
        });

        window.addEventListener('keydown', e => {
            if (e.code === 'KeyP')
                this.config.PAUSED = !this.config.PAUSED;
            if (e.key === ' ')
                this.splatStack.push(parseInt(Math.random() * 20) + 5);
        });
    }
}

const wallPaper = new fluidWallPaper()
export default wallPaper


