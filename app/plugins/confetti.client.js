export default defineNuxtPlugin(() => {
    if (typeof window === "undefined") return

    // ==================== TU CÓDIGO DE CONFETTI ====================
    var maxParticleCount = 150
    var particleSpeed = 2
    var colors = [
        "DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue",
        "LightBlue", "Violet", "PaleGreen", "SteelBlue",
        "SandyBrown", "Chocolate", "Crimson"
    ]

    let streamingConfetti = false
    let animationTimer = null
    let particles = []
    let waveAngle = 0

    function resetParticle(particle, width, height) {
        particle.color = colors[(Math.random() * colors.length) | 0]
        particle.x = Math.random() * width
        particle.y = Math.random() * height - height
        particle.diameter = Math.random() * 10 + 5
        particle.tilt = Math.random() * 10 - 10
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05
        particle.tiltAngle = 0
        return particle
    }

    function startConfettiInner() {
        var width = window.innerWidth
        var height = window.innerHeight

        window.requestAnimFrame = (function() {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
            return window.setTimeout(callback, 16.66)
            }
        )
        })()

        var canvas = document.getElementById("confetti-canvas")
        if (canvas === null) {
        canvas = document.createElement("canvas")
        canvas.id = "confetti-canvas"
        canvas.style.cssText = "display:block;position:fixed;top:0;left:0;z-index:999999;pointer-events:none"
        document.body.appendChild(canvas)
        canvas.width = width
        canvas.height = height
        window.addEventListener(
            "resize",
            () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            },
            true
        )
        }

        var context = canvas.getContext("2d")

        while (particles.length < maxParticleCount) {
        particles.push(resetParticle({}, width, height))
        }

        streamingConfetti = true

        if (animationTimer === null) {
        (function runAnimation() {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight)
            if (particles.length === 0) {
            animationTimer = null
            } else {
            updateParticles()
            drawParticles(context)
            animationTimer = requestAnimFrame(runAnimation)
            }
        })()
        }
    }

    function stopConfettiInner() {
        streamingConfetti = false
    }

    function removeConfettiInner() {
        stopConfettiInner()
        particles = []
    }

    function toggleConfettiInner() {
        if (streamingConfetti) stopConfettiInner()
        else startConfettiInner()
    }

    function drawParticles(context) {
        for (var i = 0; i < particles.length; i++) {
        var particle = particles[i]
        context.beginPath()
        context.lineWidth = particle.diameter
        context.strokeStyle = particle.color
        var x = particle.x + particle.tilt
        context.moveTo(x + particle.diameter / 2, particle.y)
        context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2)
        context.stroke()
        }
    }

  function updateParticles() {
    var width = window.innerWidth
    var height = window.innerHeight

    waveAngle += 0.01

        for (var i = 0; i < particles.length; i++) {
        var p = particles[i]

        if (!streamingConfetti && p.y < -15) p.y = height + 100
        else {
            p.tiltAngle += p.tiltAngleIncrement
            p.x += Math.sin(waveAngle)
            p.y += (Math.cos(waveAngle) + p.diameter + particleSpeed) * 0.5
            p.tilt = Math.sin(p.tiltAngle) * 15
        }

        if (p.x > width + 20 || p.x < -20 || p.y > height) {
            if (streamingConfetti && particles.length <= maxParticleCount)
            resetParticle(p, width, height)
            else {
            particles.splice(i, 1)
            i--
            }
        }
        }
    }

    // ==================== EXPONEMOS LOS MÉTODOS ====================
    const confettiAPI = {
        start: () => startConfettiInner(),
        stop: () => stopConfettiInner(),
        toggle: () => toggleConfettiInner(),
        remove: () => removeConfettiInner(),
    }

    return {
        provide: { confetti: confettiAPI }
    }
})
