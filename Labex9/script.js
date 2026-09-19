
let myChart = echarts.init(document.getElementById('main'));

fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => {
    
        const categoryCounts = {};

        json.forEach(product => {
            const category = product.category;
            if (categoryCounts[category]) {
                categoryCounts[category]++;
            } else {
                categoryCounts[category] = 1;
            }
        });

        
        const categories = Object.keys(categoryCounts);
        const counts = Object.values(categoryCounts);

    
        let options = {
            title: { text: 'Fake Store Categories' },
            xAxis: {
                data: categories
            },
            yAxis: {},
            series: [{
                name: '# products',
                type: 'bar',
                data: counts
            }]
        };

        
        myChart.setOption(options);
    });