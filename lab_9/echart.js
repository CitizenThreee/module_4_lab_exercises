// Specify the configuration items and data for the chart
let options = {
    title: { text: 'Fake Store Categories' },
    xAxis: {
        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4']
    },
    yAxis: {},
    series: [{
        name: '# products',
        type: 'bar',
        data: [0, 1, 5, 2]
    }]
};

function initData(data) {
    let sortedProducts = new Map();
    data.forEach(item => {
        if(sortedProducts.get(item.category) == undefined){
            sortedProducts.set(item.category, 1);
        }
        else{
            sortedProducts.set(item.category, sortedProducts.get(item.category)+1);
        }
        
    })
    
    return sortedProducts;
}

function updateOptions(sortedProducts) {
    let categories = [];
        let numofitems = [];
        for(let pair of sortedProducts){
            categories.push(pair[0]);
            numofitems.push(pair[1]);
        }

        options.xAxis.data = categories;
        options.series[0].data = numofitems;
}

fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => {
        let parsedData = initData(json);
        return parsedData;
    })
    .then((sortedProducts) => {
        updateOptions(sortedProducts);
    })
    .then(() => {
        myChart.setOption(options);
    })
    
let myChart = echarts.init(document.getElementById('main'));