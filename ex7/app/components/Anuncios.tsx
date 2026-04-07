import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';

function Anuncios() {
  const produtos = [
    {
      id: 1,
      titulo: 'Action Figure Hatsune Miku',
      preco: 'R$ 450',
      descricao: 'Figure premium da Vocaloid, articulada',
      imagem: require('../../assets/images/icon.png')
    },
    {
      id: 2,
      titulo: 'Kamen Rider Gavv X  Valen ',
      preco: 'R$ 380',
      descricao: 'Transformation belt com sons oficiais',
      imagem: require('../../assets/images/icon.png')
    },
    {
      id: 3,
      titulo: 'Funko Pop Naruto',
      preco: 'R$ Grátis',
      descricao: 'Boneco colecionável modo Sage',
      imagem: require('../../assets/images/icon.png')
    },
    {
      id: 4,
      titulo: 'Nendoroid Goku',
      preco: 'R$ 300',
      descricao: 'Figure articulada com acessórios',
      imagem: require('../../assets/images/icon.png')
    },
    {
      id: 5,
      titulo: 'Roronoa Zoro & Roronoa Sanji ',
      preco: 'R$ 280',
      descricao: 'Wedding set',
      imagem: require('../../assets/images/icon.png')
    },
    {
      id: 6,
      titulo: 'Demon Slayer Tanjiro',
      preco: 'R$ 350',
      descricao: 'Action figure com espada Nichirin',
      imagem: require('../../assets/images/icon.png')
    },
    {
      id: 7,
      titulo: 'Pokemon Charizard',
      preco: 'R$ 200',
      descricao: 'Figure colecionável shiny edition',
      imagem: require('../../assets/images/icon.png')
    },
    {
      id: 8,
      titulo: 'One Piece Luffy Gear 5',
      preco: 'R$ 480',
      descricao: 'Figure exclusiva da transformação',
      imagem: require('../../assets/images/icon.png')
    }
  ];

  return (
    <View style={styles().container}>
      <Text style={styles().title}>Anúncios</Text>
      
      <View style={styles().scrollContainer}>
        <ScrollView 
          horizontal
          style={styles().scrollView}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles().scrollContent}
        >
          {produtos.map(produto => (
            <View key={produto.id} style={styles().produtoCard}>
              <Image 
                source={produto.imagem}
                style={styles().produtoImagem}
                resizeMode="contain"
              />
              <Text style={styles().produtoTitulo}>{produto.titulo}</Text>
              <Text style={styles().produtoPreco}>{produto.preco}</Text>
              <Text style={styles().produtoDescricao}>{produto.descricao}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default Anuncios;
