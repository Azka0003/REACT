export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image"
                    src="/src/images/whiteTree.png" alt="WhiteTree" width="50px" />
            </div>
            <div>
                <img src="/src/images/marker.png" alt="map marker icon" />
                <span>Japan</span>
                <a href="https://www.google.com/search?sca_esv=48c2a6a335f0c113&sxsrf=AE3TifOigi_zG1LiaC6zX68jgGjnqA5QgA:1757366449595&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MRo3L_oOc-1oJ7O1RV73dx34kGRQzTW9SLUsvVZFx7L-lOcr7L0d2mO-dhTfuCiJ64jJyM_jzUww2YgVgly9rIRr560TNqOHHMfc8-3k2KYqfBC5vlq8F6kT4gv_nXuz_HGBbKaCqmQL30nsTOBXFJP_vg3SQ&q=image+of+nature+white+covering+the+world&sa=X&ved=2ahUKEwiaqd-XjMqPAxVJWHADHQeDGTsQtKgLegQIEhAB&biw=1280&bih=585&dpr=1.5#vhid=bQBetaO_6hl7EM&vssid=mosaic">View on Google Maps</a>
                <h2>Mount Fuji</h2>
                <p>12 jan, 2021-24Jan, 2021</p>
              <p>Mount Fuji is famous for its iconic, graceful conical shape, its status as Japan's highest peak, and its deep cultural and spiritual significance as a sacred symbol and pilgrimage site for Shinto and Buddhist followers. Its prominent natural beauty has made it a muse for artists for centuries, and its recognition as a UNESCO World Heritage Site further elevates its global renown.  </p>
               </div>
        </article>
    )
}

// now i want to do this same with some different info below but 
// if react is reusable then it doesnt make sense copy and paste or change inside info ,
// situation is like structure is same but content is different
// as i can see if i call entry again then same data will come as hard coded
// so we do data driven and here concept of props comes



// PURE HARDCODING (worst, beginners start here)