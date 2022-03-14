import React from 'react'
import {} from "./OurMenu.module.css"

 function OurMenu() {
  return (
    <div style={{padding:'80px' , margin:'auto'}} className='row w-9'>
        <div   className='col p-3'>
            <h1 className='text-center'>Our Menu</h1><br />
            <h4>Bread Basket</h4>
            <p className='text-muted'>Assortment of fresh baked fruit breads and muffins 5.50</p> <br />
            <h4  >Honey Almond Granola With Fruits</h4>
            <p  className='text-muted'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            <br />
            <h4>Belgian Waffle</h4>
            <p className='text-muted'>Vanilla flavored batter with malted flour 7.50</p> <br />
            <h4  >Scrambled eggs</h4>
            <p className='text-muted'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
            <br />
            <h4>Blueberray Pancakes</h4>
            <p className='text-muted'> With syrup, butter and lots of berries 8.50</p>
        </div>
        <div className='col m-2   hide-small'>
            <img className="img-fluid" src="https://www.w3schools.com/w3images/tablesetting.jpg" height="600px" alt="" />
        </div>
    </div>
  )
}
export default OurMenu;