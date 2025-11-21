<template>
  <div 
    class="cursor" 
    :class="{ 'cursor-click': isClicking }"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const position = ref({ x: -100, y: -100 });
const isClicking = ref(false);

const handleMouseMove = (e) => {
  position.value.x = e.clientX;
  position.value.y = e.clientY;
};

const handleMouseLeave = () => {
  position.value.x = -100;
  position.value.y = -100;
};

const handleMouseEnter = (e) => {
  position.value.x = e.clientX;
  position.value.y = e.clientY;
};

const handleMouseDown = () => {
  isClicking.value = true;
};

const handleMouseUp = () => {
  isClicking.value = false;
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseleave', handleMouseLeave);
  document.removeEventListener('mouseenter', handleMouseEnter);
  document.removeEventListener('mousedown', handleMouseDown);
  document.removeEventListener('mouseup', handleMouseUp);
});
</script>

<style scoped>
.cursor {
    position: fixed;
    width: 12px;
    height: 12px;
    background: #0ff;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    box-shadow: 0 0 6px #0ff, 0 0 14px #0ff;
    animation: cursor-pulse 1.2s ease-in-out infinite;
    mix-blend-mode: difference;
    will-change: transform;
    transition: transform 0.1s ease-out;
}

.cursor.cursor-click {
    animation: cursor-pulse 1.2s ease-in-out infinite, cursor-bounce 0.3s ease-out;
}

.cursor::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 255, 255, 0.35);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: cursor-ring 1.2s ease-out infinite;
    transition: all 0.1s ease-out;
}

.cursor-click::after {
    animation: cursor-ring 1.2s ease-out infinite, cursor-ring-bounce 0.3s ease-out;
}

@keyframes cursor-bounce {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(0.7);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes cursor-ring-bounce {
  0% {
    transform: translate(-50%, -50%) scale(1);
    border-width: 1px;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.4);
    border-width: 2px;
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    border-width: 1px;
  }
}

@keyframes cursor-pulse {
  0%, 100% {
    background: #00f5ff;
    box-shadow:
      0 0 8px #00f5ff,
      0 0 20px rgba(0, 245, 255, 0.9),
      0 0 30px rgba(0, 245, 255, 0.5);
  }
  50% {
    background: #a4ffea;
    box-shadow:
      0 0 12px #a4ffea,
      0 0 28px rgba(164, 255, 234, 0.95),
      0 0 42px rgba(164, 255, 234, 0.6);
  }
}

@keyframes cursor-ring {
  0% {
    opacity: 0.45;
    transform: translate(-50%, -50%) scale(0.4);
    border-color: rgba(0, 255, 255, 0.6);
  }
  60% {
    opacity: 0.15;
    transform: translate(-50%, -50%) scale(1.6);
    border-color: rgba(164, 255, 234, 0.3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
    border-color: rgba(164, 255, 234, 0);
  }
}
</style>