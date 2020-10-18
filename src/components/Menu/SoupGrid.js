import styled from 'styled-components'
import { Title } from '../Styles/title'

export const SoupGrid = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`
export const SoupLabel = styled(Title)`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    color: #476d47;
    padding: 4px;
`
export const Soup = styled.div`
    height: 140px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({img}) => `url(${img});`}
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    margin-top: 6px;
    box-shadow:0px 0px 6px 0px gray;
    &:hover {
        cursor: pointer;
        opacity: .7;
         margin-top: 0;
         margin-bottom: 6px;
         box-shadow:0px 0px 10px 0px gray;
    }
`
