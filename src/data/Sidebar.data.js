import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
    {
        title: 'Alunos',
        path: '/alunos',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text',
    },
    {
        title: 'Professores',
        path: '/professores',
        icon: <FaIcons.FaChalkboardTeacher />,
        cName: 'nav-text',
    },
    {
        title: 'Turmas',
        path: '/turmas',
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text',
    },
    {
        title: 'Salas',
        path: '/salas',
        icon: <SiIcons.SiGoogleclassroom />,
        cName: 'nav-text',
    },
]