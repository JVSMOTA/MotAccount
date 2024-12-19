# Etapa 1: Construção do JAR usando uma imagem com Maven
FROM maven:3.9.0-eclipse-temurin-17 AS builder

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o pom.xml e as dependências para o contêiner
COPY pom.xml .
COPY src ./src

# Rodar o Maven para construir o projeto (gerar o JAR)
RUN mvn clean package -DskipTests

# Etapa 2: Imagem para rodar o aplicativo
FROM eclipse-temurin:17-jdk-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o JAR gerado na etapa anterior para o contêiner
COPY --from=builder /app/target/MotAccountWeb-0.0.1-SNAPSHOT.jar /app/MotAccountWeb-0.0.1-SNAPSHOT.jar

# Expor a porta 8080 (porta padrão do Spring Boot)
EXPOSE 8080

# Comando para rodar o JAR
ENTRYPOINT ["java", "-jar", "MotAccountWeb-0.0.1-SNAPSHOT.jar"]

