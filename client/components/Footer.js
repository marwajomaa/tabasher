import Link from "next/link";
import FooterStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.footerLeft}>
        <Link href="/">
          <h2>الشروط والاحكام</h2>
        </Link>
        <div className={FooterStyles.footerImages}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACCCAMAAACejyR2AAAAn1BMVEX///8lm9aEt0AnKS1Pqtz5/f5+tDKAtTi00pDt9OYQExkkJirAwcL19fVAQkUgIicAAAbv7/AWl9WLxea41JYYGyBZWl05Oz6ysrMUFx27u7wAAADb29uNjZCdnZ8aHCHl5ebJycpmZmmFhoff3+AxMjZ2d3kGCxNqa21bXF/S0tNRUlWUlZcAAQ5pamx9foBISk2pqqubnJ2czerT5L1RWNR9AAANwElEQVR4nO2dC5equhXHbe303hIg0hYhiDxEQFEUbb//Zys6I+xAQuJjiszwX/ecddcxbnX/yGsn2Zn85f31z39NXizNDVWnS/a6KhuebCAnCx76wMxebnZWPJ1au8QLtebrfbtYQlIUXNs7JocVrT2roLfyF2mqdGrhVOU3OfVKOiMr27gLgbvXZ6niY4Sm0ylC2EwXO5sG0beLJSSm4CRKrhAfN5S2KGhePCP44o1u5VVd0Hat0ljJE1eaga2Xn9g2QfYQZd8ulpCIgjdNWz/zKkVtlDwTRUzgSqF6izFlvcPPj3L1IbQ43w0R3/5BFEKL61kzo0oGhSSDKbLqN6Uc23EoAWG/4H8iyjdVs9S3iyXUSWE54/5ONA1gyQyzn0qG8KGGzKEwRelJDCHv/Bii3ypU3y6WUBeFDc9JU+qJLhUgyYpQyqw7lBPhmhdiCGeCz/Et4ydQ2CgdvxHvYNGddE0oO5S6yY58binU6ncaioXc/UIbPoWoC8LUT0DRU6MoKoU//2BE/Sn/y+s2/0DqMVezNqG4s4t2OurpTSQZPAW1CQFh3zcrzTxQVodVAZlKrBd81d7VDjsgSzEpEGbC+FaVto3ad4GMm8PkXB04Bc2if5Gv6JtjtKwUgUF9CIHh6TILtC5xPtBwI7qLzzN2yatgr4AwSZFVzLfbwqdGaigeOIU91XEikmQc75VamgCCvuaWE2pdwI4Cb/klXTBAMvHGywLj8v204GTBL66cBk3BoDo/3D1+n4NHGHc9wEJpVDef8yfRat0t+FFAmUhAzUTTyZApUP0tmnbGFD70mljX8yujADbt5pJbzqm/n9kMpWxAhUrVIVOgnknSPWg0QBfS4Tg5efBJjrnFAIUWeBgXwZsBU1jD9tnfdDsOtl7m+V63N6TB0FLO7WMghaLZY+1BP5UOmALVIJmCph7WBT+62+8NwZkcmOA1BCggvUkhAN8+zYZLIQENEipEjoP9wk5UWCTQ7079I69UJwWtqL8QOQ2WAvwZ7d6vJThGElUcoQzwIPOZdlKYJHV9wsfBUgjgOFURRpnhfAFZ962VtaSBmnUdaDLVTQFMdtB8sBTWcOaDhdMweu6MTs9xWIGaNeMV6qYAu7V4sBQy0DajKX/S/KUPKtqBSIotHWq3OatCI5VAczJd8N7WTYGKgQ2WAuwhOwbtlTxGTLUWxpiki7kgUl3pCCjkwUMUqNWjwVKw4dTJYhRoShevL+Bcl+u44VCVO2EYKTDkmhJrbTgXjrZeROFntEh3U5iEvsxqW8od/7+Wgv1LKUzWUnsw2puYvoUCHKlav4lCOTy0LlvkBBhycR/9AgpgmIW2v4tC2Swdi9hPGxskTaqpQtbH91PQivoz/ei3UShluFljr/B+RzVVKTdA9zoKazBEUuzBUnAepsCSDdspcbjveQowopK7g6UQ3jlrE4iKcMxE8Y2nKQRgiQLh4a4vuPdFMISi1gycOwo/RAGGQC7rHX27WELsaB7sUX35jew8wYaaeILCUhRsPoUlVfOy4VKAq2cdC17S0uI7VqalKJzBjECHbdz6QAV4LytUfbtYQuy1Nmpvy+oRx9MCq0bV+plmtHXZMgYppBmrVFmO2qijb4+eE2alTitMbX297sbs28USYlOIwChDYoFBJOi0amV6E1tt6bsztdrKKHIVPQnBPlFShZBUoaeNn9sz+naxhNgUqKCkaA+GWPC0CLkFMWKMGMKNWR5HUxkhZT1oClTHcFlBf05wAH8zpnUfAnmFZp89Wt8ulhBnV9iRal6F45puubDDTL8iSe63U0i/xgF9u1hCHAoufcpG2T6xtUKlGuvbrM1prM+9HsJtGNC3iyXE27O9oY/ZYMWKbDVkKePLdbPwRIe8qwiGxz1N9RKhWTUi7tvFEuJRCPzm2Rq/+yw5T4S2o9z6mCP/NNUL5IO9tX27WELcszwniSNL9wv5t4luccdROI4poijNZ+VTfp6AmVzfLpYQ/1xb8h0Nd310c/ZY1arrmJ6c1CzCSiPdACr/5UjNcPp2sYQ6zngeXo+B1FMPR31KVXAr81axb16wmISUf8UbpxHd69vFEuo673xM5U8xS0nZClfaHpKRqc7J259PThi0X+3bxRLqPPtvI/JCDlh5elv9Q+rbxRLqzoNhLLEikeVFQsgkO5nkFt+gvl0sIVFOmMArcGpiZsxHUhibiq8fn91S/7D6drGEJLJUrZ1otdNZkc1YoGn5xyp2h8h5fqXocfXtYgnJZmxjx/kDoQzjezrkO9S3iyX0+rx5b6e+XSyhX0DhbwPQf/p20rfrYwjq20mjRo0aNWrUqFGjRo0aNWrUqJcpUE+JtXgy6cyoh2WEp6hIZynxkfBI1qhv0nyRVluPRgp9CZ5qGSn0pZHCO2ik8A4aKbyDRgrvoKco/GMI+ha3vVhPUfj7APTnt7jtxXqKwl/fX3/8+1vc9mKNFN5BI4V30EjhHTRSeAeNFN5BI4V30EjhHTRSCDL1dF5Gx2jpOWHDA2vV9vbL/dlWxYd1gtDxlkmySY57OwyExd1QdWwn/Dy5LEFhXZqPkk1p/mzTX7NvF0uok4KhLnfXxAvE9H3fJOX/xcubv7Pz7vOYsXl9gcxtbprD0k7hf5rBl9tAL3aijnNu63NBqtPlc8+lbu1sUwicqLh+Ff9q/vJWa18/Fn27WEJ8CtnSyhWzecITmfmu/IHryEwJnUMBK2nE4pDt2XZSnZPtOSxyaPpySWcM3tmgEC7jtJ2I4fI1b5j7drGEeBRCfcbL5o8Xy92CmYCCkMZhWs05zFKeHZSvGNSC7ayVIYMyACgY9jbnmseLZOgU9m1XAHHT/KMcJpzUioXSmXPEtIIWfVOUK6aiYMQC8+TzPr2+XSwhNgX70UReKIXNzFR0YB03M9KqC+EZ94qCJszT4RdDpqA9njaHuqK8ELqU0FdphzPRG2CLpAvNX3M+9O1iCTEpuE9kgyEga20izkSVwp7EkEkOWVPYiJ+VxXq4FNQnMlTBytDKytbOwYkP4HMTcypWTWHZLN427yfDpWA36wJCmP2YMl5I63Tm9S1Fl8Sz6TWflN8YVvpBVTxb0JbwZRLQGuPWFE5N8xdzjQ47/ykUygH7VC/0uDUgwUSJyxem9At+3dRn17qAfIVY26OnZu46CFw1wbA8SOO9ouxgf760VXu50glhJaG85d4tzfvWNjqF7tW8c6CwlS1e3y6WkASF3T4LjA8tUHdUC4DNuZcFmqYFNnVdG7jnwvARMhU9sV1qpuXCBM31XcQBVRVIlTxUcz2YVrumYOSXB0FPHJcaaYWwNPF+BAV4uy9M74l2dYzAgGMq2DH4abHM2nEfeBNA3TFQvQihLhVjRzA0ouz2bnvmFwJDOPkRFGCmfnjXLbLAz8/gYAhkR/cYProIXv27uxWBA088p3IScKJ5J5edueBQF0fzH0eBGhsSGI6DMwMizlHPujCeSrxN6FjfnZFtUKtQ8fMowEaDGulTd76Io9wgp311lQi8vad558OdFKj7Yn4eBfgCdcHOGXTcEhQyBoUTIFxlIH6MgvqzKTg8CrCSPEgBTrSVRqM2UngNhSALbe+8X161B/eNVBR24N/ihqdFFD7WlPkNND9S+FTmbS1kptdluU/Bge2NAhx/FY2hVSeF7DzvMj9SKKV5lkk48Q+KAghsfN6nI0XB2Fuk2/xIoexzseDG4YoCnGrBEF8nhZMo+/FIodRGmKqbSaF5HxOHgraSMD9S2IovHHmGwk4cCR8pTI4Sq0UVBeDR1kV9bAoyN0SMFFxqsQiZCrkJRgVvFMAidR1b6qJAL0cgwjH/2ykcYMDbjM/XOPhVLmPWVsBIocx8YUWb94B5eMvnL6dgwOUWQt29ENSRu4oCjBQqgZiCAXcK0Fc7BOPcuaIA4gjNWyhZFKg4UuMeXRYFahGE3soxUqgpgNt/m5dEsyjAu0ObgyQWhT2M7wYjBQ4FEJ5DBb0cE9StSUWBWl/w6XAeiwJcKSro7z9SqCmAzhmsRV9lMCjAcF6ziWFRAJ1zc2Q7UqgpADehxsPKpEDtOaBXGAQUmuZHCswWaYrpfoFJYQKnF4i6zpi1+k+tR9Aj25ECp3emWxjWfIHub0szq68jOUag6oydMLC0T+3Y+NoHNVK4CC4kT81jteHdPR/gWkJNQaOPIuBUXyXHZGuRlLUrzIFVR4kq89l5RZn/5RQMauO8GSeeY3vHrZVSN28CCq0N+whfzkg1wqaLr/IGFUUicXK6mo+b5n85hcmRCnkiTC5Hz1pHq+ARBon4HDKrwtSO8OsVtyzzv51CwDvsxKUgEauu1+HWMjvLRwpSd0TTFLS5qDbM6o/1JE4cjRQmk0iMgaYw+TjmXRUI5XCwJWV+pDA5L0TnbVDzaJsTc1eqkUI8quw+F5sfKZRD96LlKOQrSn1KtEVhonlx2j7IW75rVnjNXTAhx3z19iFTWKSVFjBy7yzqK98XkMIevkDPk8NNnhL/eisuLscx6cJK7FO0U2afQ8o2hVLqEc8uA56rLrkC0kWc2AHjq07U1c08vpqfWUf7khk9V77MT/54fzGzFwbMu90vLzhA0CkufKG1eS48HbeFpRfbo2dnN6cHqreZlrgtBoXrR52izWq7PSTH/cnJ2IWu0krzc93Sd6vIqy/PXTvnVWlesSZ/DkD/5f+8/4cye9nh4Gf14Tr7/wEtLFy5+wQ+AgAAAABJRU5ErkJggg=="
            alt="mada img"
            style={{ width: "60px", height: "20px" }}
          />
          <img
            src="https://banner2.cleanpng.com/20180523/wqt/kisspng-mastercard-credit-card-american-express-visa-debit-mbna-5b0525b571e990.8787905215270639894666.jpg"
            alt="visa img"
            style={{ width: "60px", height: "20px" }}
          />
        </div>
      </div>
      <div>
        <h3>الحقوق محفوظة - محمد علي - ٢٠٢١</h3>
        <h3>
          صنع باتقان على <Link href="/">طباشير</Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
