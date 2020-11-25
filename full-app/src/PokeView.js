function PokeView(props) {
  const { spriteList } = props;

  // use .map to do render an img for every element in the array
  return (
    <section className='sprite-container'>
      {spriteList.map((url, i) => <div><img src={url} alt={'pokemon ' + i} key={i} /></div>)}
    </section>
  )
}

export default PokeView;