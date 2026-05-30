const PRODUCTS = [
  {
    id: 1,
    name: "Plumón Sherpa 2P Gris Naranjo",
    type: "Plumón",
    price: 23990,
    desc: "",
    image: "plumondots2p.webp",
  },
  {
    id: 2,
    name: "Plumón Chantilly liso 1.5P",
    type: "Plumón",
    price: 21990,
    desc: "",
    image: "plumon-chantilly-liso.webp",
  },
  {
    id: 3,
    name: "Plumón Estampado king",
    type: "Plumón",
    price: 32990,
    desc: "",
    image: "Plumón-estampado-outboss-deluxe-blanco.webp",
  },
  {
    id: 4,
    name: "Plumón Estampado king",
    type: "Plumón",
    price: 32990,
    desc: "",
    image: "Plumón-estampado-outboss-deluxe-celeste.webp",
  },
  {
    id: 5,
    name: "Plumón Estampado king",
    type: "Plumón",
    price: 32990,
    desc: "",
    image: "Plumón-estampado-outboss-deluxe-negro.webp",
  },
  {
    id: 6,
    name: "Plumón Estampado king",
    type: "Plumón",
    price: 32990,
    desc: "",
    image: "Plumón-estampado-outboss-deluxe-rosado.webp",
  },
  {
    id: 7,
    name: "Plumón Sherpa 2P Vicky",
    type: "Plumón",
    price: 23990,
    desc: "",
    image: "plumonvivky2p.webp",
  },
  {
    id: 8,
    name: "Plumón Sherpa 1.5P Vicky",
    type: "Plumón",
    price: 20990,
    desc: "",
    image: "plumonsherpaviky.webp",
  },
  {
    id: 9,
    name: "Vaso mug clásico 1.2lt",
    type: "Cocina",
    price: 9990,
    desc: "",
    image: "vaso-mug-clasico-1.2lt.webp",
  },
  {
    id: 10,
    name: "Sábana Polar Mashimi 2.0 Modelo CUBIK",
    type: "Sábana",
    price: 12990,
    desc: "",
    image: "sabana-polar-mashini2plazas.webp",
  },
  {
    id: 11,
    name: "Bolsas reutilizables",
    type: "Otros",
    price: 3990,
    desc: "",
    image: "bolsasreutilizables.webp",
  },
  {
    id: 12,
    name: "Frasada Polar Mashimi 2.0 Reverso sherpa",
    type: "Frazadas",
    price: 13990,
    desc: "",
    image: "frasadaplar2preversosherpa.webp",
  },
  {
    id: 13,
    name: "Sábana Polar Doral 1.5 Estampado",
    type: "Sábana",
    price: 10990,
    desc: "",
    image: "sabanapolardoral1.5estampado.webp",
  },
  {
    id: 14,
    name: "Sábana 1.5P Spiderman",
    type: "Sábana",
    price: 13990,
    desc: "",
    image: "sabana1.5spiderman.webp",
  },
  {
    id: 15,
    name: "Plumón Estampado Reversible 1.5P Hello Kitty",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonreversiblehellokitty.webp",
  },
  {
    id: 16,
    name: "Plumón Estampado Reversible 1.5P Kuromi",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonreversiblekuromy.webp",
  },
  {
    id: 17,
    name: "Plumón Estampado Reversible 1.5P Dragon Ball",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonreversible1.5dragonball.webp",
  },
  {
    id: 18,
    name: "Plumón Estampado Reversible 1.5P",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonreversiblestitch.webp",
  },
  {
    id: 19,
    name: "Plumón Estampado Reversible 1.5P Mohana",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonreversiblemohana.webp",
  },
  {
    id: 20,
    name: "Plumón Estampado Reversible 1.5P",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonreversibleminnie.webp",
  },
  {
    id: 21,
    name: "Sábana 1.5P Colo-Colo",
    type: "Sábana",
    price: 13990,
    desc: "",
    image: "sabanacolocolo.webp",
  },
  {
    id: 22,
    name: "Plumón Estampado Reversible 1.5P Colo-Colo",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonreversiblecolocolo.webp",
  },
  {
    id: 23,
    name: "Manta Estampado 127x152cm",
    type: "Frazadas",
    price: 6990,
    desc: "",
    image: "mantaestampado.webp",
  },
  {
    id: 24,
    name: "Sábana 1.5P Kuromi",
    type: "Sábana",
    price: 13990,
    desc: "",
    image: "sabana1.5pkuromi.webp",
  },
  {
    id: 25,
    name: "Sábana 1.5P Hello Kitty",
    type: "Sábana",
    price: 13990,
    desc: "",
    image: "sabana1.5phellokitty.webp",
  },
  {
    id: 26,
    name: "Sábana 1.5P Mohana",
    type: "Sábana",
    price: 13990,
    desc: "",
    image: "sabana1.5pmohana.webp",
  },
  {
    id: 27,
    name: "Plumón 1.5P Spiderman",
    type: "Plumón",
    price: 20000,
    desc: "",
    image: "plumonspiderman.webp",
  },
  {
    id: 28,
    name: "Sábanas 1.5P Minnie",
    type: "Sábana",
    price: 13990,
    desc: "",
    image: "sabana1.5pminnie.webp",
  },
  {
    id: 29,
    name: "Sábanas 1.5P Universidad de Chile",
    type: "Sábana",
    price: 13990,
    desc: "",
    image: "sabana1.5pudechile.webp",
  },
  {
    id: 30,
    name: "Vaso mug clásico 1.2lt gris",
    type: "Cocina",
    price: 9990,
    desc: "",
    image: "vasomuggris.webp",
  },
  {
    id: 31,
    name: "Jarra Térmica termolux 2 lt negra",
    type: "Cocina",
    price: 12990,
    desc: "",
    image: "jarratermicanegra.webp",
  },
  {
    id: 32,
    name: "Jarra Térmica termolux 2 lt roja",
    type: "Cocina",
    price: 12990,
    desc: "",
    image: "jarratermicaroja.webp",
  },
  {
    id: 33,
    name: "Cojín Universidad de Chile",
    type: "Cojín",
    price: 7490,
    desc: "",
    image: "cojinudechile.webp",
  },
  {
    id: 34,
    name: "Cojín Colo-Colo",
    type: "Cojín",
    price: 7490,
    desc: "",
    image: "cojincolocolo.webp",
  },
  {
    id: 35,
    name: "Buzo Jogger French Terry gris S M L XL ",
    type: "Buzo",
    price: 7990,
    desc: "",
    image: "buzojogger.webp",
  },
  {
    id: 36,
    name: "Vaso mug clásico 1.2lt celeste",
    type: "Cocina",
    price: 9990,
    desc: "",
    image: "vasomugceleste.webp",
  },
  {
    id: 37,
    name: "Plumón Chantilly liso 1.5P verde",
    type: "Plumón",
    price: 21990,
    desc: "",
    image: "plumonchantillyverde.webp",
  },
  {
    id: 38,
    name: "Vaso mug clásico 1.2lt lila",
    type: "Cocina",
    price: 9990,
    desc: "",
    image: "vasomuglila.webp",
  },
  {
    id: 39,
    name: "Plumón Chantilly liso 1.5P terracota",
    type: "Plumón",
    price: 21990,
    desc: "",
    image: "plumonlisoterracota.webp",
  },
  {
    id: 40,
    name: "Juego de 7 cuchillos de cocina",
    type: "Cocina",
    price: 9990,
    desc: "",
    image: "juego7cuchillos.webp",
  },
  {
    id: 41,
    name: "Secaplatos 2 niveles",
    type: "Cocina",
    price: 14990,
    desc: "",
    image: "secaplatos2niveles.webp",
  },
  {
    id: 42,
    name: "Pijama polar M",
    type: "Pijama",
    price: 8990,
    desc: "",
    image: "pijamahombrem.webp",
  },
  {
    id: 43,
    name: "Set 6 toallas CANNON algodón",
    type: "Toallas",
    price: 17490,
    desc: "",
    image: "set6toallasalgodon.webp",
  },
  {
    id: 44,
    name: "Termoventilador Versalles",
    type: "Otros",
    price: 11990,
    desc: "",
    image: "termoventilador.webp",
  },
  {
    id: 45,
    name: "Pijama palmers algodón talla M",
    type: "Pijama",
    price: 9990,
    desc: "",
    image: "pijamapalmersazul.webp",
  },
  {
    id: 46,
    name: "Bajada de cama decorativa",
    type: "otros",
    price: 5990,
    desc: "",
    image: "alfombradecorativa.webp",
  },
  {
    id: 47,
    name: "Tetera de té 0.8lt Diana ",
    type: "Cocina",
    price: 5490,
    desc: "",
    image: "teteradete0.8.webp",
  },
  {
    id: 48,
    name: "Frazada térmica 1.5P",
    type: "Frazadas",
    price: 7500,
    desc: "",
    image: "frasadatermica.webp",
  },
  {
    id: 49,
    name: "Frazada térmica 2P",
    type: "Frazadas",
    price: 8500,
    desc: "",
    image: "frasadatermica.webp",
  },
  {
    id: 50,
    name: "Frazada térmica king",
    type: "Frazadas",
    price: 9500,
    desc: "",
    image: "frasadatermica.webp",
  },
  {
    id: 51,
    name: "Plumón Sherpa 2P Burdeo Rosa",
    type: "Plumón",
    price: 23990,
    desc: "",
    image: "plumonsherpaburdeorosa.webp",
  },
  {
    id: 52,
    name: "Sabana 1.5P Dragon Ball",
    type: "Sabana",
    price: 13990,
    desc: "",
    image: "sabana1.5pdragonball.webp",
  },
];

const productsEl = document.getElementById("products");
const q = document.getElementById("q");
const filterType = document.getElementById("filterType");
const sortBy = document.getElementById("sortBy");

function money(n) {
  return "$" + n.toLocaleString("es-CL");
}

function renderProducts(list) {
  productsEl.innerHTML = "";
  list.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
          <div class="thumb">
            <a href="./img/${p.image}" data-lightbox="galeria">
              <img src="./img/${p.image}" alt="${p.name}" width="150"></div>
            </a>
          <div style="flex:1">
            <div style="font-weight:700">${p.name}</div>
            
          </div>
          <div class="meta">
            <div class="price">${money(p.price)}</div>
          </div>
        `;
    productsEl.appendChild(div);
  });
}

function filtered() {
  let res = PRODUCTS.slice();

  res.sort((a, b) => a.name.localeCompare(b.name));
  const term = q.value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (filterType.value !== "all")
    res = res.filter((r) => r.type === filterType.value);
  if (term)
    res = res.filter((r) =>
      (r.name + " " + r.desc + " " + r.type).toLowerCase().includes(term),
    );
  if (sortBy.value === "price-asc") res.sort((a, b) => a.price - b.price);
  if (sortBy.value === "price-desc") res.sort((a, b) => b.price - a.price);
  return res;
}

q.addEventListener("input", () => renderProducts(filtered()));
filterType.addEventListener("change", () => renderProducts(filtered()));
sortBy.addEventListener("change", () => renderProducts(filtered()));

renderProducts(PRODUCTS);
document.getElementById("year").textContent = new Date().getFullYear();
