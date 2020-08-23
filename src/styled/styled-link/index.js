import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`

    font-family: Red Hat Display;
    font-weight: 400;
    font-size: 23px;
    color: #f3f3f3;
    margin-right: 2.50rem;
    overflow: hidden;
    
    span {
        color: #f3f3f3;
        padding-right:0.625rem;
        position: relative;
	    display: inline-block;
        -webkit-transition: -webkit-transform 0.3s;
        -moz-transition: -moz-transform 0.3s;
        transition: transform 0.3s;
    }

    span::before {
        
        position: absolute;
        top: 100%;
        content: attr(data-hover);
        font-weight: bold;
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }

    &:hover span,
	&:focus span {
       
		-webkit-transform: translateY(-100%);
		-moz-transform: translateY(-100%);
		transform: translateY(-100%);
	}

`

export default StyledLink