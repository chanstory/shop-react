import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';

export default class Contact extends React.Component{

  //react-hot-loader 사용하면 constructor변경 시 새로고침해야 적용됨.
	constructor(props){
		super(props);
		this.state = {
      selectedKey: -1,
      keyword: '',
			contactData:[
				{name:'A', phone:'010-0000-0001'},
				{name:'B', phone:'010-0000-0002'},
				{name:'C', phone:'010-0000-0003'},
				{name:'D', phone:'010-0000-0004'}
			]
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}

  handleChange(e){
    this.setState({
      keyword: e.target.value
    });
  }

  handleClick(key){
    this.setState({
      selectedKey: key
    });

    console.log(key, 'is selected');
  }

	render(){
		const mapToComponent = (data) =>{
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );

			return data.map((contact, i) =>{
				return (<ContactInfo
                contact ={contact}
                key={i}
                onClick={() => this.handleClick(i)}/>);
			});
		};

		return(
			<div>
        <h1>Contacts</h1>
        <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}/>
				{mapToComponent(this.state.contactData)}
        <ContactDetails
          isSelected={this.state.selectedKey != -1}
          contact={this.state.contactData[this.state.selectedKey]}/>
			</div>
		);
	}
}
