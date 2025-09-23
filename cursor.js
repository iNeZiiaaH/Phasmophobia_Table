(function () {
    let canvas, context;
    let particles = [];
    let mouseX = 0, mouseY = 0;
    let animationId;

    function init() {
        canvas = document.createElement('canvas');
        context = canvas.getContext('2d');

        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        canvas.style.width = '100%';
        canvas.style.height = '100%';

        document.body.appendChild(canvas);

        resize();

        document.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', resize);

        animate();
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function onMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function createSnowflake() {
        particles.push({
            x: Math.random() * canvas.width,
            y: -20,
            vx: (Math.random() - 0.5) * 0.5,
            vy: Math.random() + 3,
            life: 200,
            maxLife: 200,
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 0.03
        });
    }

    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];

            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            p.life--;

            p.vy += 0.01;

            if (p.life <= 0 || p.y > canvas.height + 20) {
                particles.splice(i, 1);
            }
        }
    }

    function drawParticles() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            const alpha = p.life / p.maxLife;

            context.save();
            context.translate(p.x, p.y);
            context.rotate(p.rotation);
            context.globalAlpha = alpha;

            context.font = '20px Arial';
            context.fillText('❄️', -8, 6);

            context.restore();
        });
    }

    let lastFlakeTime = 0;

    function animate() {
        updateParticles();

        const now = Date.now();
        if (now - lastFlakeTime > 200) {
            if (particles.length < 20) {
                createSnowflake();
                lastFlakeTime = now;
            }
        }

        drawParticles();
        animationId = requestAnimationFrame(animate);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();