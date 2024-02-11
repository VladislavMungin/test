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

const node = api.services.filter(item => item.node == 1).sort((item1,item2)=> item1.sorthead > item2.sorthead ? 1 : -1);

const list = api.services.filter(item=>item.node == 0).sort((item1,item2)=> item1.sorthead > item2.sorthead ? 1 : -1);

const container = document.querySelector('.container');

node.forEach(item=>{
    const root = document.createElement('div');
    root.className = 'root';

    const box = document.createElement('div');
    box.className = 'box';

    const button = document.createElement('button');
    button.className = 'button';
    button.innerText = '>';
    
    const h2 = document.createElement('h2');
    h2.innerText = item.name;
    
    box.append(button);
    box.append(h2);

    const ul = document.createElement('ul');
    
    list.forEach(i => {
        if(i.head == item.id){
            const li = document.createElement('li');
            li.innerHTML = `${i.name} - ${i.price}`;
            ul.append(li);
        }
    })
    
    ul.classList.add('hide');

    root.append(box);
    root.append(ul);

    container.append(root);
});


container.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('button')) {
        const root = target.closest('.root');
        const ul = root.querySelector('ul');

        if (ul.classList.contains('hide')) {
            ul.classList.remove('hide');
            ul.classList.add('show');
            target.classList.add('rotate');
        } else {
            ul.classList.remove('show');
            ul.classList.add('hide');
            target.classList.remove('rotate');
        }
    }
});


