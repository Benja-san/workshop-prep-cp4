import styles from "./Shop.module.css";
import { SneakerModel } from "@/model/SneakerModel";

const Shop = () => {
  const sneakers: SneakerModel[] = [
    {
      img: "https://media.architecturaldigest.com/photos/5d28b5cfd78a3c00099d11ba/1:1/w_1200,h_1200,c_limit/417744_001a_4.png",
      title: "Nike X Back To The Future",
      alt: "back to the future nike",
    },
    {
      img: "https://mthorshop.com/cdn/shop/products/prophere-dragon-ball-z-cell-136787.png?v=1742904969&width=800",
      title: "Adidas X DBZ",
      alt: "adidas x DBZ cell collection",
    },
    {
      img: "https://sneakersalert.com/wp-content/uploads/2022/11/pokemon-puma-rider-fv-bulbizarre-bulbasaur-387324-01-pic2.png",
      title: "Puma X Pokémon",
      alt: "puma x Pokemon collection",
    },
    {
      img: "https://www.golfposer.com/media/wysiwyg/Nike-Jordan-Travis-Scott-Golf-Shoes-Cactus-Jack_0004_FZ3124-200_D_PREM.png",
      title: "Nike X Travis Scott",
      alt: "Travis Scott Nike Jordan collection",
    },
    {
      img: "https://png.pngtree.com/png-vector/20250325/ourmid/pngtree-classic-canvas-pumpkin-party-high-tops-footwear-png-image_15861451.png",
      title: "Converse X Nightmare Before Christmas",
      alt: "NBC x Converse collection",
    },
    {
      img: "https://i0.wp.com/blog.hobbydb.com/wp-content/uploads/2024/04/Cons_Chuck_D_D-removebg-preview.png?resize=544%2C476&ssl=1",
      title: "Converse X DnD",
      alt: "DnD x Converse collection",
    },
  ];
  return (
    <section className={styles.shop}>
      <h1>My sneakers List</h1>
      <ul className={styles.sneakers}>
        {sneakers.map((sneaker, i) => {
          return (
            <li key={`sneaker-${i + 1}`} className={styles.sneakerCard}>
              <article>
                <h2>{sneaker.title}</h2>

                <img src={sneaker.img} alt={sneaker.alt} />
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Shop;
