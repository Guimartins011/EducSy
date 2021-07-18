import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import * as FaIcons from 'react-icons/fa';

class Alunos extends Component {
    render() {
        return (
            <div>
                <span>Alunos!</span>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Matrícula</Th>
                            <Th>Nome</Th>
                            <Th>Idade</Th>
                            <Th>E-mail</Th>
                            <Th>Telefone</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>a112342</Td>
                            <Td>Osni Barbosa Chagas</Td>
                            <Td>32</Td>
                            <Td>osni.neto@outlook.com</Td>
                            <Td>(43) 99907-0421</Td>
                            <Td><FaIcons.FaEdit /> <FaIcons.FaSearch /> <FaIcons.FaTrashAlt /></Td>
                        </Tr>
                        <Tr>
                            <Td>a112366</Td>
                            <Td>Alice Lupochinicki Barbosa</Td>
                            <Td>5</Td>
                            <Td>aluno.kids@outlook.com</Td>
                            <Td>(43) 99907-0421</Td>
                            <Td><FaIcons.FaEdit /> <FaIcons.FaSearch /> <FaIcons.FaTrashAlt /></Td>
                        </Tr>
                        <Tr>
                            <Td>a112342</Td>
                            <Td>Michele Lupochinicki</Td>
                            <Td>28</Td>
                            <Td>michele.lupo.2014@outlook.com</Td>
                            <Td>(43) 99662-8463</Td>
                            <Td><FaIcons.FaEdit /> <FaIcons.FaSearch /> <FaIcons.FaTrashAlt /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        );
    }
}

export default Alunos;