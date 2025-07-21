import styles from "./Shop.module.css"
import { SneakerModel } from "@/model/SneakerModel"

const Shop = () => {
  return (
    <section className={styles.shop}>
      <h1>My sneakers List</h1>
      <ul className={styles.sneakers}>
        <li className={styles.sneakerCard}>
          <article>
            <h2>Nike X Back To The Future</h2>
            <img
              src="https://media.architecturaldigest.com/photos/5d28b5cfd78a3c00099d11ba/1:1/w_1200,h_1200,c_limit/417744_001a_4.png"
              alt="back to the future nike"
            />
          </article>
        </li>
        <li className={styles.sneakerCard}>
          <article>
            <h2>Adidas X DBZ</h2>
            <img
              src="https://mthorshop.com/cdn/shop/products/prophere-dragon-ball-z-cell-136787.png?v=1742904969&width=800"
              alt="adidas x DBZ cell collection"
            />
          </article>
        </li>
        <li className={styles.sneakerCard}>
          <article>
            <h2>Puma X Pokémon</h2>
            <img
              src="https://sneakersalert.com/wp-content/uploads/2022/11/pokemon-puma-rider-fv-bulbizarre-bulbasaur-387324-01-pic2.png"
              alt="puma x Pokemon collection"
            />
          </article>
        </li>
        <li className={styles.sneakerCard}>
          <article>
            <h2>Nike X Travis Scott</h2>
            <img
              src="https://www.golfposer.com/media/wysiwyg/Nike-Jordan-Travis-Scott-Golf-Shoes-Cactus-Jack_0004_FZ3124-200_D_PREM.png"
              alt="Travis Scott Nike Jordan collection"
            />
          </article>
        </li>
        <li className={styles.sneakerCard}>
          <article>
            <h2>Converse X Nightmare Before Christmas</h2>
            <img
              src="https://png.pngtree.com/png-vector/20250325/ourmid/pngtree-classic-canvas-pumpkin-party-high-tops-footwear-png-image_15861451.png"
              alt="NBC x Converse collection"
            />
          </article>
        </li>
        <li className={styles.sneakerCard}>
          <article>
            <h2>Converse X DnD</h2>
            <img
              src="https://i0.wp.com/blog.hobbydb.com/wp-content/uploads/2024/04/Cons_Chuck_D_D-removebg-preview.png?resize=544%2C476&ssl=1"
              alt="DnD x Converse collection"
            />
          </article>
        </li>
      </ul>
    </section>
  )
}

export default Shop
