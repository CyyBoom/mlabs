import React, { useState, useEffect } from 'react';
import images from '../images/index';

const PostList = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('db/schedules.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const sortData = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.publication_date) - new Date(b.publication_date);
      } else {
        return new Date(b.publication_date) - new Date(a.publication_date);
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const renderSocialMedia = (value) => {
    if (value === 2) {
      return <img className="socialmidia_icons instagram" src={images.instagramlogopost} />
    } else if (value === 3) {
      return <img src={images.linkedinlogopost} />
    }
  };

  const renderAction = (value) => {
    if (value === 2) {
      return 'Publicado';
    } else if (value === 3) {
      return 'Agendado';
    } else {
      return 'Não aprovado';
    }
  };
  return (
    <div className="grid-container table-responsive">
      <p className="scheduele_list">Listagem de agendamento</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="scheduele_list">Redes sociais</th>
            <th className="scheduele_list">Mídia</th>
            <th className="scheduele_list">Texto</th>
            <th className="scheduele_list" onClick={sortData}>
              Data{' '}
              {sortOrder === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>}
            </th>
            <th className="scheduele_list">Ações</th>
            <th className="scheduele_list">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.social_network_key.map(social => renderSocialMedia(social))}</td>
                <td><img src={item.media} width='50px' /></td>
                <td>{item.text}</td>
                <td>{item.publication_date}</td>
                <td><a className="previewlist" href="#">Preview</a></td>
                <td>{renderAction(item.status_key)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
