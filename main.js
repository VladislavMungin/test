const api = {
    "services": [
        {
            "id": 1,
            "head": null,
            "name": "Проф.осмотр",
            "node": 0,
            "price": 100.0,
            "sorthead": 20
        },
        {
            "id": 2,
            "head": null,
            "name": "Хирургия",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 3,
            "head": 2,
            "name": "Удаление зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 4,
            "head": 3,
            "name": "Удаление зуба",
            "node": 0,
            "price": 800.0,
            "sorthead": 10
        },
        {
            "id": 5,
            "head": 3,
            "name": "Удаление 8ого зуба",
            "node": 0,
            "price": 1000.0,
            "sorthead": 30
        },
        {
            "id": 6,
            "head": 3,
            "name": "Удаление осколка зуба",
            "node": 0,
            "price": 2000.0,
            "sorthead": 20
        },
        {
            "id": 7,
            "head": 2,
            "name": "Хирургические вмешательство",
            "node": 0,
            "price": 200.0,
            "sorthead": 10
        },
        {
            "id": 8,
            "head": 2,
            "name": "Имплантация зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 20
        },
        {
            "id": 9,
            "head": 8,
            "name": "Коронка",
            "node": 0,
            "price": 3000.0,
            "sorthead": 10
        },
        {
            "id": 10,
            "head": 8,
            "name": "Слепок челюсти",
            "node": 0,
            "price": 500.0,
            "sorthead": 20
        }
    ]
}

const container = document.querySelector('.container');

function build(nodeId){
    const wrapper = document.createElement('div');
    const heads = api.services.filter(item => item.head == nodeId).sort((item1,item2)=> item1.sorthead > item2.sorthead ? 1 : -1);
    const sortApi = api.services.sort((item1,item2)=> item1.sorthead > item2.sorthead ? 1 : -1);
    heads.forEach(head =>{
        const ul = document.createElement('ul');
        const liHead = document.createElement('li');
        liHead.innerText = `${head.name} ${(head.price != 0.0) ? `(${head.price})` : ''}`;
        ul.append(liHead);
        sortApi.forEach(service => {
            if(service.head == head.id){
                if(service.node == 0){
                    const li = document.createElement('li');
                    li.innerText = `${service.name} ${(service.price != 0.0) ? `(${service.price})` : ''}`;
                    liHead.append(li);
                } else {
                    const li = document.createElement('li');
                    li.innerText = `${service.name} ${(service.price != 0.0) ? `(${service.price})` : ''}`;
                    liHead.append(li);
                    liHead.append(build(service.id));
                }
            }
        })


        wrapper.append(ul);
    })
    return wrapper;
}

container.append(build(null))


