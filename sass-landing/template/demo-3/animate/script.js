// ---------------------------------
// Animate On Scroll (One-time play)
// ---------------------------------
const animatedElements = document.querySelectorAll(".animate__animated");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.dataset.animate;
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target); // เล่นครั้งเดียว
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach((el) => {
  el.classList.remove(
    "animate__flash",
    "animate__fadeInUp",
    "animate__jackInTheBox",
    "animate__zoomInUp",
    "animate_counter"
  );
  observer.observe(el);
});

// Array of logo objects, each containing 'alt' text and 'src' URL
const logos = [
  {
    alt: "Partner logo 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvaIRwuVop7XCnUlaRmXQ4UfgBgo49TnnQwzC_oPWHfSU5tIDlZ77FJuYue4cByASA73pKvCu73QrY0liJnF15ndoZ4tS0tZMHmT7aFTPmr1mROQ59DLAmOzWR2euLkQUo96iKLZyv0UcopkQGcRBseok5MIcgJT8t0Oa54xH_34vvcHKHol4u_I5wUhHhRSE6ht0pFSve-ESqRc43PWrLbxx8TsQ0ewb1KT1vD-twZpcsgYZSxoZnTg1p6iGmgHTgBJU7pLB9_yI",
  },
  {
    alt: "Partner logo 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf-5RSfGhvGq8HgIrrZicfsLaDWtC67IWIe0xuEX9jchp6jtfP0YF2vlDSMy1rqihzGpf3dtWTicBDoUWGyLXsXRGJ_DB1ZONttrRAFs2xUE4IKqAuHto5WoRncOFlzN_juLaHnVnwMk9OzMn_mAjcIFG7pVUR6BMMKhBJFsDUZ2ZyxCwqhB9WI2_-No12llLSrRhZylCjcnFSv0N4wePqWoPeXTjh8aSFIf0TyluYHiH1fLA3UhooReKAnAdBqDU1Z55FcddsPcM",
  },
  {
    alt: "Partner logo 3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmcqlyPkEo6uvynENJP9tjeXfwC8uiT9USnfgFmd3mvLP_w7spepb2xLQwFZfOjhqOi5ZNAsdRMr13KBRRk8Ol26bxGsxzomp1NhS87rydej5fGds_sMwXW1HUBI3tldxRoQ8MYxPXX6MX4FtfnhrcrmtlAHK7kxcazcvJ4OZXVZR8hEdyjmdS178qV9xqejAquHZWdzJYVVMJyEZNoBTpsFjqpRf5RW2wzo85avzlizUS415A9gMUNky8LKm_X3eECnSkkE5Fn3M",
  },
  {
    alt: "Partner logo 4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBp0tveSp3tLz1atJhsO297OGifGQcTWYESvs-fda_1NbF56NQUMk4dXLDQsIG-EPzqSiJZWhfXWEsE8zwltaURHl9uGzCOSFsz0lPoo4IejZtfS7G-usFjf0xJQhL4S9GhVSDPlDaxu7KGrJPqpfo-dn1DmDANHD4kv2M_wB_6MIPMrDiu3pqXnh3uH-QRXjfXjrZ0kskd17usgQR8rbt5DlzZV0amfHeI0GlE481NceM-zkYLeajddDiYkZ-FIbnzXEjafv1dpk",
  },
  {
    alt: "Partner logo 5",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWBdMPrzyuqmN9Ss74i5_iGqYn1fbplwlZYRe2a0Kv7ZgBhG74V_6fcB5t2kH-Iu61-WtlNeTac4Rstb0kY82rogjh-K7OYAaBy3vD1si9roRZ-Dj5FSML1kC-M-3ltxRang_tyfQ5RnUCSPOql8eNHzrcX8LeMm14j2UiscY6izH4VTK1qYPoavw7r33-i2pHgQNambylU-Ol8x5_hcQiVCwT7QaZQvrYaImBm01mlKYUP2Taph0F8Q8QMAxNNIzMzbwmTQlhrk8",
  },
  {
    alt: "Partner logo 6",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcELXyhNm8nVhcwqSSMkAyOz12dkYLlwuM2UoLZqTnqA_JDRKGt88-wsdmp6qscyFt1RReoo-_gK9RiBGKTcaxlCeRiJjn_tUGaq5DxXPGKa3oNbu-1ZMamdOysZn6lTnZGD9pB-X6EjkhkFFg6Zt35DLczyGUohATP1WHIgYWYptPNaqcvbP3SCD23navBiNqwdm1GmgSQwx_P1jr2wlSDfw12iqh0w9jsYcHFakLU6QhQk0pgobifGOoxSS2UeMEXZ-gsesoyC8",
  },
];

// Duplicate the array for a seamless scrolling effect
const allLogos = [...logos, ...logos];

// Select the container element where logos will be inserted
const logoContainer = document.getElementById("logos-container");

// Map through the array and generate HTML for each logo
// Then join them into a single string and insert into container
logoContainer.innerHTML = allLogos.map((logo) => 
  `
    <div class="logo-item">
      <img alt="${logo.alt}" class="max-h-16 w-auto" src="${logo.src}">
    </div>
  `
).join("");

// Function to animate number counting
function animateCounter(el, target) {
  let current = 0;
  const increment = target / 100; // adjust speed
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(current) + "%";
  }, 20); // update every 20ms
}

// Use IntersectionObserver to trigger when visible
const counters = document.querySelectorAll(".animate_counter");
const counterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-target"));
      animateCounter(el, target);
      obs.unobserve(el); // run once
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));