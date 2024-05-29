import Image from 'next/image'
import classes from './page.module.css'
export default function MealDetailsPage({params}){
return(
    <>
   <header className={classes.header}>
    <div className={classes.image}>
        <Image fill/>
    </div>
    
   </header>
   <main></main>
    </>
)
}