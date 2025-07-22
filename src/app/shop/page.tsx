import styles from "./Shop.module.css";
import { SneakerModel } from "@/model/SneakerModel";

const Shop = async () => {
  const response = await fetch("http://localhost:3000/api/sneakers");
  const result = await response.json();
  const sneakers: SneakerModel[] = result.sneakers;

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
