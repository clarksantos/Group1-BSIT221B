import Header from '@/components/header';
import Subheader from '@/components/subheader';
import styles from '@/styles/recipe.module.scss';

function meh() {
    return (
        <>
            <Header />
            <Subheader />
            <section className={styles.cont}>
                <h1>This is the Recipes Page</h1>
                <div className={styles.container}>
                    
                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/chickentinola.jpg'></img>
                    <h1>CHICKEN TINOLA</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 1 hour 10 minutes <br />
                    </p>          
                    
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/porksinigang.png'></img>
                    <h1>PORK SINIGANG</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 40 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <div><img className={styles.homedesign} src='/images/adobo.jpg'></img>
                    <h1>CHICKEN ADOBO</h1>
                    <p>
                        Country Origin: Philippines <br />
                        Difficulty Level: Medium <br />
                        Total Time: 40 minutes <br />
                    </p>
                    <a href='./desserts'>View more</a>

                        
                    </div>
                    </div>


                

                </div>
            </section>
        </>
        )
}

export default meh