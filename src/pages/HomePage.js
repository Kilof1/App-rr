import React from 'react';
import Article from '../components/Article'


const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo totam quaerat iusto eligendi animi aspernatur est eum, velit, pariatur at, maxime consectetur dolore laboriosam. Illo nemo quos voluptas quis!'
    },
    {
        id: 2,
        title: "Czym jest teoria strun",
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga nemo officiis. Hic possimus repellendus atque eius porro a placeat, quas non sunt explicabo voluptate beatae omnis similique natus mollitia.'
    },
    {
        id: 3,
        title: "Czym jest teoria strun",
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vel explicabo ratione fugiat rerum tempora porro facere nemo beatae quis provident a perspiciatis voluptate voluptatem, nobis ipsa reiciendis perferendis iusto?'
        }
]


const HomePage = () => {

    const artList = articles.map(article => (<Article key={article.id} {...article}/>))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;