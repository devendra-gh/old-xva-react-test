import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { BeatLoader } from 'react-spinners';
import {fetchSearch} from '../../actions/search';

let counter = 1,
    startTime = null;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const {search} = nextProps;
        search && this.loaderHandler(false);

        search && console.log('search', search);
        //console.log(this.state.counter)
    };

    searchHandler = (e) => {
        const {fetchSearch, user: {isAdmin}} = this.props;
        let input = e.target.value,
            endTime = new Date();

        if(counter === 1) {
            startTime = new Date();
            console.log('~~~~~~~~~set StartTime')
        }

        let timeStatus = (endTime - startTime) / 1000;

        console.log('~~~~~~~~~timeStatus', timeStatus);

        if(timeStatus > 60) {
            startTime = new Date();
            console.log('~~~~~~~~~set StartTime again');
        }

        if(counter > 15 && timeStatus > 60) {
            counter = 0;
            console.log('~~~~~~~~~set counter')
        }

        if(isAdmin) {
            fetchSearch(input);
            this.loaderHandler(true);
        } else if(timeStatus <= 60 && counter <= 15) {
            fetchSearch(input);
            this.loaderHandler(true);
            console.log('~~~~~~~~~', counter);
            counter++;
        } else {
            alert('Sorry! you can not search above 15 in 1 min');
            this.loaderHandler(false);
        }

    };

    loaderHandler = (status) => {
        this.setState({
            isLoading: status,
        });
    };

    setPopulation = (population) => {
        if(population <= 100000) { //1 Lac
            return {
                width: population / 100,
                backgroundColor: 'rgb(9, 253, 9)',
            }
        } else if(population <= 1000000) {      //10 Lac
            return {
                width: population / 1000,
                backgroundColor: '#07ce07',
            }
        } else if(population <= 100000000) {    //10 Crore
            return {
                width: population / 100000,
                backgroundColor: '#008000',
            }
        } else if(population <= 10000000000) {  //1000 Crore
            return {
                width: population / 10000000,
                backgroundColor: '#ffff00',
            }
        } else if(population <= 1000000000000) { //100000 Crore
            return {
                width: population / 1000000000,
                backgroundColor: '#ff0000',
            }
        } else {                                 //unknown
            return {
                width: '100%',
                backgroundColor: '#000000',
            }
        }
    };

    createSearchList = (item, index) => {
        console.log(item.population);
        return (
            <li key={index}>
                <div className='population-layer' style={this.setPopulation(item.population)}></div>
                <div className='details'>
                    <h2>Planet: {item.name}</h2>
                    <span>Population: {item.population}</span>
                </div>
            </li>
        )
    };

    render() {
        const { search } = this.props;
        const { isLoading } = this.state;
        return (
            <div>
                <div className='search-section clearfix'>
                    <input onKeyUp={this.searchHandler}
                           className="form-control"
                           type="text"
                           placeholder="Search..."/>
                    <button className='light-green-btn' title="Population <= 100000" />
                    <button className='green-btn' title="Population <= 1000000" />
                    <button className='dark-green-btn' title="Population <= 100000000" />
                    <button className='yellow-btn' title="Population <= 10000000000" />
                    <button className='red-btn' title="Population <= 1000000000000" />
                    <button className='black-btn' title="Population > 1000000000000 || Unknown" />
                </div>

                <ul className='search-list-section'>
                    { search && search.length
                        ? search.map(this.createSearchList)
                        : <li>No result found</li>
                    }
                </ul>

                {
                    isLoading
                        ? <div className='sweet-loading'><BeatLoader color={'#14ad8e'} /></div>
                        : null
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    search: state.search,
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    fetchSearch: bindActionCreators(fetchSearch, dispatch),
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
