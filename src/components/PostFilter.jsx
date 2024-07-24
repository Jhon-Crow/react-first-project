import React from 'react';
import MyInput from "./UI/input/MyInput.jsx";
import MySelect from "./UI/select/MySelect.js";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})} //возвращаем все поля, меняем нужное
                placeholder={'Search'}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort by...'
                option={[
                    {value:'title', name: 'By name'},
                    {value:'body', name: 'By discription'}
                ]}
            />
        </div>
    );
};

export default PostFilter;