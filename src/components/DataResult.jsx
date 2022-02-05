import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getCity, activateStatus } from '../store/actions';



const DataResult = () => {

	const { dataResult, dataActivePos, msgNotFound } = useSelector(state => state);
	const dispatch = useDispatch();

	const cleanInput = () => {

    if(!msgNotFound) document.querySelector('#inputCity').value = '';
  }
  
	const handleOnSearch = async(city) => {

    await dispatch(activateStatus('loadingStatus'));
    await dispatch(getCity(city));
		await cleanInput();
  }


	return (
		<>
			{
				dataResult.length !== 0 && (
					
					<div id="dataSearch">
						<DataResultContainer className="dataResult">
	
							{
								dataResult.slice(0, 10).map((val, index) => {
									return (
										<div key={index} className={`dataItem ${index === dataActivePos? 'dataActive': ''}`}>
											
											<p onClick={(e) => handleOnSearch(e.target.textContent)}><i className="bi bi-search search-small"/>{val}</p>
										</div>
									)
								})
							}
					
						</DataResultContainer>
					</div>
					)
				}
		</>
	)
}

export default DataResult;


const DataResultContainer = styled.div`

	position: absolute;
	left: 50%;
	z-index: 1000;
	background-color: white;
	opacity: 0.9;
	width: 235px;
	height: 150px;
	margin-left: -117.5px;
	text-align: start;
	overflow: hidden;	
	overflow-y: auto;
	border-radius: 0px 0px 0px 2px;
	border: solid 1px rgb(223, 223, 223);

	&::-webkit-scrollbar {
		width: 7px;
		background-color: rgba(212, 212, 212, 0.5);
		border-radius: 0px 0px 2px 0px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgb(168, 168, 168);
		border-radius: 10px;
	}

	.dataItem p{
		color: rgb(129, 129, 129);
		font-size: 0.8rem;
		padding: 0.3rem 0.5rem;
	}

	.dataItem p:hover{
		cursor: pointer;
		background-color: rgb(243, 243, 243);
	}

	.dataActive{
		background-color: rgb(243, 243, 243);
	}

	.search-small{
		padding-right: 1.1rem;
		font-size: 0.6rem;
		color: rgb(160, 160, 160);
	}
`