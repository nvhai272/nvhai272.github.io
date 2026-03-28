<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-[2]" aria-hidden="true">
    <div
      v-for="p in petals"
      :key="p.id"
      class="petal absolute"
      :style="p.style"
    />
  </div>
</template>

<script setup lang="ts">
// Pre-defined so no layout recalculation on render
const petals = [
  { id:  0, style: { left:  '4%', animationDuration: '12s', animationDelay:  '0s', width:  '9px', height: '11px' } },
  { id:  1, style: { left: '11%', animationDuration:  '9s', animationDelay:  '3s', width:  '7px', height:  '9px' } },
  { id:  2, style: { left: '21%', animationDuration: '14s', animationDelay:  '6s', width: '11px', height: '13px' } },
  { id:  3, style: { left: '33%', animationDuration: '10s', animationDelay:  '1s', width:  '8px', height: '10px' } },
  { id:  4, style: { left: '44%', animationDuration: '13s', animationDelay:  '8s', width: '12px', height: '15px' } },
  { id:  5, style: { left: '55%', animationDuration: '11s', animationDelay:  '4s', width:  '7px', height:  '9px' } },
  { id:  6, style: { left: '66%', animationDuration: '16s', animationDelay:  '2s', width: '10px', height: '12px' } },
  { id:  7, style: { left: '76%', animationDuration:  '9s', animationDelay:  '7s', width:  '8px', height: '10px' } },
  { id:  8, style: { left: '85%', animationDuration: '13s', animationDelay:  '5s', width: '11px', height: '13px' } },
  { id:  9, style: { left: '93%', animationDuration: '11s', animationDelay:  '9s', width:  '9px', height: '11px' } },
  { id: 10, style: { left: '28%', animationDuration: '15s', animationDelay: '11s', width:  '7px', height:  '9px' } },
  { id: 11, style: { left: '60%', animationDuration: '10s', animationDelay: '13s', width: '10px', height: '12px' } },
]
</script>

<style scoped>
.petal {
  top: -1.5rem;
  background: linear-gradient(135deg, #fce7f3, #f9a8d4);
  border-radius: 50% 0 50% 0;
  opacity: 0;
  animation-name: sakura-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Dark mode: slightly more visible */
:global(.dark .petal) {
  background: linear-gradient(135deg, #fce7f3cc, #f9a8d4aa);
  opacity: 0;
}

@keyframes sakura-fall {
  0%   { transform: translateY(0)     rotate(0deg)   translateX(0px);   opacity: 0;   }
  6%   { opacity: 0.55; }
  25%  { transform: translateY(25vh)  rotate(110deg) translateX(35px);  }
  50%  { transform: translateY(50vh)  rotate(230deg) translateX(-25px); }
  75%  { transform: translateY(75vh)  rotate(380deg) translateX(45px);  }
  90%  { opacity: 0.4; }
  100% { transform: translateY(108vh) rotate(520deg) translateX(10px);  opacity: 0;   }
}
</style>
