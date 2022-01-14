import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import { Subtitle, Text } from '../../style/typography';
import { Container, Img, Loader } from './styles';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [cover, setCover] = useState();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await api.get(
          `/cities?name=${location.pathname.substring(1)}`
        );
        setAbout(res.data[0].information);
        setCover(res.data[0].cover);
        setName(res.data[0].name);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [location]);

  if (loading)
    return (
      <Loader>
        <div />
        <div />
      </Loader>
    );

  return (
    <Container>
      <Subtitle>{name}</Subtitle>
      <Text>{about}</Text>
      <Img src={cover} alt="city landscape" height={400} />
    </Container>
  );
};

export default Main;
