class SpectacularHorrorCursor {
    constructor() {
        this.cursor = null;
        this.trails = [];
        this.particles = [];
        this.rings = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.isHovering = false;
        this.maxParticles = 30;
        this.animationId = null;
        this.init();
    }

    init() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'spectacular-cursor';
        document.body.appendChild(this.cursor);

        this.cursor.style.left = '50%';
        this.cursor.style.top = '50%';
        this.cursor.style.transform = 'translate(-50%, -50%)';

        this.createRings();

        for (let i = 0; i < 10; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = '50%';
            trail.style.top = '50%';
            trail.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(trail);
            this.trails.push(trail);
        }

        this.createParticles();

        document.addEventListener('mousemove', (e) => this.updatePosition(e));
        document.addEventListener('mousedown', () => this.onClick());
        document.addEventListener('mouseup', () => this.onRelease());

        this.setupHoverEffects();

        this.animate();
    }

    createRings() {
        const ring2 = document.createElement('div');
        ring2.className = 'cursor-ring-2';
        this.cursor.appendChild(ring2);
        this.rings.push(ring2);

        const ring3 = document.createElement('div');
        ring3.className = 'cursor-ring-3';
        this.cursor.appendChild(ring3);
        this.rings.push(ring3);
    }

    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'cursor-particle';

            const particleTypes = ['ghost-particle', 'blood-particle', 'energy-particle'];
            const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
            particle.classList.add(randomType);

            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = 'translate(-50%, -50%)';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';

            document.body.appendChild(particle);
            this.particles.push(particle);
        }
    }

    updatePosition(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        this.cursor.style.left = this.mouseX - 15 + 'px';
        this.cursor.style.top = this.mouseY - 15 + 'px';

        this.trails.forEach((trail, index) => {
            setTimeout(() => {
                trail.style.left = this.mouseX - 4 + 'px';
                trail.style.top = this.mouseY - 4 + 'px';
            }, index * 30);
        });

        this.updateParticles();
    }

    updateParticles() {
        this.particles.forEach((particle, index) => {
            const angle = (index / this.particles.length) * Math.PI * 2;
            const radius = 30 + Math.sin(Date.now() * 0.001 + index) * 20;
            const x = this.mouseX + Math.cos(angle) * radius;
            const y = this.mouseY + Math.sin(angle) * radius;

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
        });
    }

    onClick() {
        this.cursor.style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.cursor.style.transform = 'scale(1)';
        }, 100);

        this.createSimpleRipple();
    }

    onRelease() {
    }

    createSimpleRipple() {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = this.mouseX + 'px';
        ripple.style.top = this.mouseY + 'px';
        ripple.style.width = '0px';
        ripple.style.height = '0px';
        ripple.style.background = 'radial-gradient(circle, var(--accent), transparent)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9997';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.transition = 'all 0.5s ease-out';

        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.opacity = '0';
        }, 10);

        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 500);
    }

    setupHoverEffects() {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.isHovering = true;
                this.cursor.style.transform = 'scale(1.5)';
                this.cursor.style.background = 'var(--ghost-purple)';
                this.cursor.style.borderColor = 'var(--horror-red)';
            });

            button.addEventListener('mouseleave', () => {
                this.isHovering = false;
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'var(--horror-red)';
                this.cursor.style.borderColor = 'var(--accent)';
            });
        });

        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.3)';
                this.cursor.style.background = 'var(--accent)';
            });

            input.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'var(--horror-red)';
            });
        });

        document.querySelectorAll('th.sortable').forEach(th => {
            th.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.6)';
                this.cursor.style.background = 'var(--horror-orange)';
            });

            th.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'var(--horror-red)';
            });
        });

        document.querySelectorAll('.checkbox-group label').forEach(label => {
            label.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.4)';
                this.cursor.style.background = 'var(--ghost-purple)';
            });

            label.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'var(--horror-red)';
            });
        });

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('tbody tr')) {
                this.cursor.style.transform = 'scale(1.2)';
                this.cursor.style.background = 'var(--accent)';
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('tbody tr')) {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'var(--horror-red)';
            }
        });

        document.addEventListener('mouseover', (e) => {
            if (e.target.tagName === 'STRONG' && e.target.closest('tbody tr')) {
                this.cursor.style.transform = 'scale(1.8)';
                this.cursor.style.background = 'var(--horror-orange)';
                this.cursor.style.borderColor = 'var(--ghost-purple)';
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.tagName === 'STRONG' && e.target.closest('tbody tr')) {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'var(--horror-red)';
                this.cursor.style.borderColor = 'var(--accent)';
            }
        });
    }

    animate() {
        setInterval(() => {
            this.cursor.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.cursor.style.transform = 'rotate(0deg)';
            }, 1000);
        }, 2000);
    }
}

const cursor = new SpectacularHorrorCursor();