const sortByCategory = (dataArray) => {
    console.log('sorting')
    let sortedByCategory = {}
    dataArray.forEach(item => {
        if (sortedByCategory[item.category]) {
            sortedByCategory[item.category].push(item)
        } else {
            sortedByCategory[item.category] = []
            sortedByCategory[item.category].push(item)
        }
    })
    return sortedByCategory
}

render(){
    let sortedData = sortByCategory(this.props.foodMenu)
    let foodMenu = []
    
    for(let key in sortedData) {
        foodMenu.push(
            <div >
                <h3>{key.toUpperCase()}</h3>
                <br />
                <div>
                    {
                        sortedData[key].map(food => {
                            return (
                                <div key={food.id}>
                                    <Food  key={food.id} food={food} addToCart={this.addToCart}/>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            {foodMenu}
        </div>
    )
}