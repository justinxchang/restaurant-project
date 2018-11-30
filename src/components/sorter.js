
export const sortByCategory = (dataArray) => {
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

// export const sortFood = (data) => {
//     console.log('sorting')
//     let sortedByCat = {}
//     data.forEach(food => {
//         if (sortedByCat[food.category]) {
//             sortedByCat[food.category].push(food)
//         } else {
//             sortedByCat[food.category] = []
//             sortedByCat[food.category].push(food)
//         }
//     })
//     return sortedByCat
// }

// let mockData = [
//     {category: 'pizza'},
//     {category: 'pizza'},
//     {category: 'pizza'},
//     {category: 'pizza'},
//     {category: 'pizza'},
//     {category: 'pizza'},
//     {category: 'pizza'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'burgers'},
//     {category: 'sandwiches'},
//     {category: 'sandwiches'},
//     {category: 'sandwiches'},
//     {category: 'sandwiches'}
// ]



// let result =  sortFood(mockData)

