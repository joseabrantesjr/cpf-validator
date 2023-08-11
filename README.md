# Validador de CPF 

Este é um projeto de exemplo para demonstrar a implementação de um validador de CPF em JavaScript, juntamente com uma interface web simples para testá-lo. O validador segue as práticas recomendadas de programação, incluindo sanitização de entrada, prevenção contra ataques de injeção e manipulação de erros.

## Funcionalidades

- Validação de CPF: Através da função `validateCPF`, o código verifica se um CPF fornecido é válido ou inválido, seguindo as regras de validação estabelecidas pela Receita Federal do Brasil.

- Sanitização de Entrada: A função `sanitizeInput` remove espaços em branco e caracteres especiais da entrada do usuário, garantindo que apenas os dígitos numéricos do CPF sejam considerados.

- Prevenção contra Ataques de Injeção: A função `preventInjection` remove caracteres que podem ser usados para ataques de injeção, como aspas simples, duplas e barras invertidas.

- Manipulação de Erros: A função `handleError` permite tratar erros de forma apropriada, exibindo mensagens de erro no console e podendo ser estendida para exibir mensagens para o usuário.

- Interface Web: Um formulário HTML simples permite que os usuários insiram um CPF e vejam imediatamente se é válido ou inválido, sem a necessidade de recarregar a página.

## Como Usar

1. Clone este repositório para sua máquina local usando `git clone`.

2. Abra o arquivo `exemplo.html` em um navegador da web.

3. Insira um CPF no campo de entrada.

4. O status da validade do CPF será exibido abaixo do campo de entrada.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, correções de bugs ou recursos adicionais, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
