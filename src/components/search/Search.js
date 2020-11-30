import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ImageResults from '../image-results/ImageResults'
import axios from 'axios'

export class Search extends React.Component{
	state={
		searchText:"",
		amount:15,
		apiUrl:"https://pixabay.com/api/",
		apiKey:"17765059-9daf471a976deafe60fcfa741",
		images:[]
	}

	onTextChange=(e)=>{
		let val=e.target.value
		this.setState({[e.target.name]:val},()=>{
			if(val===""){
				this.setState({images:[]})
			}else{
				axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safe_search=true`)
				.then((res)=>{
					this.setState({images:res.data.hits})
				}).catch((error)=>{
					console.log(error)
				})
			}
			
		})
	}

	onAmountChange=function(e,index,value){
		this.setState({amount:value})
	}.bind(this)

	render(){
		return(
			<div>
				<TextField 
					name="searchText"
					floatingLabelText="Search for image"
					value={this.state.searchText}
					onChange={this.onTextChange}
					fullWidth={true}
					autoComplete="off"
				/>
				<br />
				<SelectField name='amount'
					floatingLabelText='Amount'
					value={this.state.amount}
					onChange={this.onAmountChange}
				>
					<MenuItem value={5} primaryText="5" />
					<MenuItem value={10} primaryText='10' />
					<MenuItem value={15} primaryText='15' />
					<MenuItem value={30} primaryText='30' />
					<MenuItem value={50} primaryText='50' />
				</SelectField>
				<br />
				{this.state.images.length>0? (<ImageResults images={this.state.images}/>) : null}
			</div>
		)
	}
}

export default Search