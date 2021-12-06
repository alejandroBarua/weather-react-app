import './DataResult.css';

const DataResult = ({filteredData, onSearch, dataActivePos}) => {

	return (
		<>
			{
				filteredData.length !== 0 && (
					
					<div id="dataSearch" className="dataResultContainer">
						<div className="dataResult">
	
							{
								filteredData.slice(0, 10).map((val, index) => {
									return (
										<div key={index} className={`dataItem ${index === dataActivePos? 'dataActive': ''}`}>
											
											<p onClick={(e) => {onSearch(e.target.textContent)}}><i className="bi bi-search search-small"/>{val}</p>
										</div>
									)
								})
							}
					
						</div>
					</div>
					)
				}
		</>
	)
}

export default DataResult;
