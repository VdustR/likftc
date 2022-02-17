<script lang="ts">
  import Likftc from "@likftc/svelte";
  import { v4 } from "uuid";

  const opacitiyArr = [1, 0.5, 0.2];
  const arr = Array.from(Array(opacitiyArr.length).keys());
</script>

<div>
  <Likftc keys={arr} generator={v4} let:get>
    {#each arr as i (get(i))}
      <svg
        class="animate__animated animate__fadeInRight"
        viewBox="0 0 500 500"
        width="1em"
        height="1em"
      >
        <defs>
          <clipPath id="_clipPath_Tmw3Y5XeReejAQVcscqqETJjqMqejOQ1">
            <rect width="500" height="500" />
          </clipPath>
        </defs>
        <path
          class="animate__animated animate__fadeInRight"
          d=" M 310.935 15.625 C 255.318 15.692 203.086 42.338 170.407 87.316 C 137.727 132.294 128.541 190.179 145.692 243.056 L 20.619 367.839 C 17.393 371.146 15.599 375.589 15.625 380.208 L 15.625 467.014 C 15.625 476.602 23.403 484.375 32.996 484.375 L 119.852 484.375 C 129.446 484.375 137.223 476.602 137.223 467.014 L 137.223 432.292 L 171.966 432.292 C 181.56 432.292 189.337 424.519 189.337 414.931 L 189.337 380.208 L 224.079 380.208 C 228.701 380.234 233.147 378.441 236.456 375.217 L 257.084 354.384 C 322.303 375.517 393.859 356.335 439.741 305.418 C 485.622 254.502 497.247 181.377 469.413 118.756 C 441.58 56.135 379.496 15.733 310.935 15.625 L 310.935 15.625 Z  M 354.363 180.556 C 335.175 180.556 319.621 165.01 319.621 145.833 C 319.621 126.657 335.175 111.111 354.363 111.111 C 373.551 111.111 389.105 126.657 389.105 145.833 C 389.105 165.01 373.551 180.556 354.363 180.556 Z "
          fill="currentColor"
          fill-opacity={opacitiyArr[i]}
        />
      </svg>
    {/each}
  </Likftc>
</div>

<style lang="scss">
  div {
    display: inline-flex;
    position: relative;
  }
  @for $i from 1 to 4 {
    svg:nth-child(#{$i}) {
      animation-delay: ($i - 1) * 0.2s;
      left: ($i - 2) * 7%;
      position: absolute;
    }
    svg:first-child {
      position: relative;
    }
  }
</style>
