import styled from 'styled-components';


const Loader = () => {
  return (
    <Loading className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Loading>
  );
};

export default Loader;


const Loading = styled.div`
  
  position: absolute;
	top: 115px;
	left: calc(50% + 120px);

  div{
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 8px;
    border: 3px solid rgb(231, 231, 231);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgb(238, 238, 238) transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`