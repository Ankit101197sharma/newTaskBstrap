import React from 'react'

 function OurMenu() {
  return (
    <div style={{padding:'64px',margin:'16px', opicity:'1'}} className='row '>
        <div   className='col '>
            <h1 className='text-center'>Our Menu</h1><br />
            <h4>Bread Basket</h4>
            <p className='text-muted'>Assortment of fresh baked fruit breads and muffins 5.50</p> <br />
            <h4  >Honey Almond Granola With Fruits</h4>
            <p className='text-muted'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            <br />
            <h4>Belgian Waffle</h4>
            <p className='text-muted'>Vanilla flavored batter with malted flour 7.50</p> <br />
            <h4  >Scrambled eggs</h4>
            <p className='text-muted'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
            <br />
            <h4>Blueberray Pancakes</h4>
            <p className='text-muted'> With syrup, butter and lots of berries 8.50</p>
        </div>
        <div className='col m-4  hide-small'>
            <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="" />
        </div>
    </div>
  )
}
export default OurMenu;