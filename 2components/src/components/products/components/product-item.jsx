import styles from "./product-item.module.css"


function ButtonComponent(){
    // console.log(styles);
    return(
        <button className={styles.buttonStyle}>Click</button>
    )
}
//as they r in same file so no need to export separetly
function ProductItem({singleProductItem,key}){
    return(
        <div
        style={{padding:"20px",border:"2px solid red",marginBottom:"12px"}}
        key={key}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;


//this is how u can pass data from one component to another component