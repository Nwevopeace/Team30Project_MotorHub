document.addEventListener('alpine:init',()=>{
  console.log('alpine:init');
  Alpine.data('vehicles', ()=>({
    currentFilter: 'brand',
    filters: [
      {title: "Brand", value: "brand"},
      {title: "Hot deals", value: "hotDeal"},
      {title: "Used", value: "used"}
    ],
    cars: [
      {
        brand: "Toyota",
        title: "Toyota 2023",
        imgUrl: "/images/pickup.png",
        price: "25,000,000 Naira",
        hotDeal: false,
        used: true,
      },
      {
        brand: "Toyota",
        title: "2023 Toyota BZ4X",
        imgUrl: "/images/spider.png",
        price: "29,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Highlander",
        title: "Highlander 2023",
        imgUrl: "/images/highlander1.png",
        price: "27,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Highlander",
        title: "Grand Highlander <br>2023",
        imgUrl: "/images/highlander2.png",
        price: "37,000,000 Naira",
        hotDeal: false,
        used: true,
      },
      {
        brand: "Lexus",
        title: "2023 Lexus <br>GX",
        imgUrl: "/images/lexus1.png",
        price: "50,000,000 Naira",
        hotDeal: false,
        used: true,
      },
      {
        brand: "Lexus",
        title: "2023 Lexus <br>IS",
        imgUrl: "/images/lexus2.png",
        price: "45,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Mercedes",
        title: "2023 Mercedes <br>Benz GT",
        imgUrl: "/images/mercedes1.png",
        price: "37,000,000 Naira",
        hotDeal: false,
        used: true,
      },
      {
        brand: "Mercedes",
        title: "2023 Mercedes <br>Benz G-Wagon",
        imgUrl: "/images/mercedes2.png",
        price: "35,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Kia",
        title: "Kia Niro",
        imgUrl: "/images/Kia1.png",
        price: "30,000,000 Naira",
        hotDeal: true,
        used: false,
      },
      {
        brand: "Kia",
        title: "Kia Xceed <br>2019-Present",
        imgUrl: "/images/highlander2.png",
        price: "37,000,000 Naira",
        hotDeal: false,
        used: true,
      },
    ],
    setBrand(brand){
      this.currentFilter = brand
    },
    get filteredCars () {
      if(this.currentFilter == 'brand') {
        return this.cars.reduce((acc,item)=>{
          return {...acc, [item.brand]: [...(acc[item.brand] ?? []), item]}
        },{})
      }
      if(this.currentFilter == 'hotDeal') return this.cars.filter(item=>item.hotDeal )
      if(this.currentFilter == 'used') return this.cars.filter(item=>item.used)
      return []
    },
    get title () {
      return this.filters.find(item=>item.value == this.currentFilter)?.title ?? ''
    }
  }))
})