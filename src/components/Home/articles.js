import React, { useState, useEffect } from "react";
import axios from 'axios';
import { URL_BLOCKS } from '../utils/paths';
import { Link } from 'react-router-dom';

const HomeArticles = () => {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${URL_BLOCKS}?_limit=6&_sort=id&_order=asc`);
                setArticles(response.data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchArticles();
    }, [])


    const showArticleBlocks = () => {
        const rows = [...Array(Math.ceil(articles.length/3))];
        const articleRows = rows.map(
            (row, i) =>  articles.slice(i*3, i*3+3)
        );

        const generatedArticles = articleRows.map((row, index) => (
            <div className='row' key={index}>
                {
                    row.map((article, index) => (
                        <div className='four columns block_item' key={article.id}>
                            <Link to={`/article/${article.id}`}>
                                <div className='top'>
                                    <div className='veil'></div>
                                    <div 
                                        className='block_image'
                                        style={{
                                            background: `url(/images/blocks/${article.image}) no-repeat`
                                        }}
                                    >
                                    {console.log(article.image)}
                                    </div>
                                </div>
                                <div className='content'>
                                    <h3>{article.title}</h3>
                                    <div>
                                        {article.desc}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        ));
        return generatedArticles;
    }



    return (
        <div>
            {showArticleBlocks()}
        </div>
    )
}

export default HomeArticles;