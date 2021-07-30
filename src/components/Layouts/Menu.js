import { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.itens = [		
			{
				nome: 'Home',
				title: 'Home',
				path: '/',
				icon: 'fas fa-home',
			},
			{
				nome: 'Alunos',
				title: 'Alunos',
				path: '/alunos',
				icon: 'fa fa-child',
			},
			{
				nome: 'Professores',
				title: 'Professores',
				path: '/professores',
				icon: 'fas fa-chalkboard-teacher',
			},
			{
				nome: 'Turmas',
				title: 'Turmas',
				path: '/Turmas',
				icon: 'fab fa-leanpub',
			},
			{
				nome: 'Disciplinas',
				title: 'Disciplinas',
				path: '/disciplinas',
				icon: 'fas fa-calculator',
			}	
			
		];
	}

	get Items() {
		return this.itens;
	}
}

export default Menu;