# [Treats: Clasificador de Razas de Perros](https://treats-nine.vercel.app/)
<img width="606" height="156" alt="Screenshot 2026-04-10 212144" src="https://github.com/user-attachments/assets/9249345f-b78c-448d-8efd-03efffe32373" />


## Resumen

El proyecto se centra en la clasificación de razas de perros mediante imágenes utilizando las bibliotecas de aprendizaje profundo Keras y TensorFlow, manejando fotos de nuestra colección y el set de datos de Standford Dogs donde trae más de 20,580 imágenes, el cual a través de un proceso meticuloso que incluye el preprocesamiento de imágenes, entrenamos un modelo de inteligencia artificial implementando la técnica de transfer-learning para reconocer y clasificar las razas de perros. Este modelo es evaluado rigurosamente para garantizar su precisión y fiabilidad. Finalmente, el modelo entrenado se utiliza para predecir las razas de perros en nuevas imágenes, proporcionando una herramienta útil y eficaz para la identificación de razas de perros.

## Objetivos

- Desarrollar un sistema de clasificación de razas de perros que sea preciso y confiable para identificar diferentes razas.
- Implementar modelos de aprendizaje automático para la clasificación de razas de perros utilizando técnicas de pre-entrenamiento.
- Desarrollar una interfaz fácil de usar que permita a los usuarios cargar imágenes de perros y recibir predicciones de la raza.

## Herramientas y Tecnologías

- **Lenguaje:** Python.
- **Bibliotecas de IA:** TensorFlow, Keras, NumPy, Pandas.
- **Arquitectura de Modelo:** InceptionV3 (Transfer Learning).
- **Backend:** Flask, Gunicorn.
- **Frontend:** React.js, Vite.
- **Estilos:** CSS3 (Estética Editorial).
- **Despliegue:** Hugging Face Spaces (Backend) y Vercel (Frontend).

## Metodología

La metodología comienza con el preprocesamiento de imágenes, donde estas se cargan, redimensionan y convierten en matrices NumPy, seguido de la normalización de las imágenes las cuales se redimensionan a 299x299 píxeles para facilitar el entrenamiento y la utilización de técnicas de aumento de datos para aumentar la diversidad del conjunto de entrenamiento. Luego, se dividen los datos en conjuntos de entrenamiento, validación y prueba.

Respecto al modelo, se emplea la arquitectura preentrenada InceptionV3 que es conocida por su eficiencia en la extracción de características de imágenes, que incluye módulos de convolución de diferentes tamaños de filtro y niveles de abstracción.

<img width="1832" height="632" alt="image" src="https://github.com/user-attachments/assets/f19820a0-8f31-4560-94b1-8f950f077af9" />


A esta arquitectura se le añaden capas adicionales para adaptarla al problema de clasificación de razas de perros. Durante el entrenamiento, se compila el modelo con un optimizador Adam y una función de pérdida de entropía cruzada categórica. Tras el entrenamiento, se evalúa el modelo con el conjunto de prueba. Por último, el modelo entrenado se integra en una aplicación web desarrollada con Flask. Esta aplicación permite a los usuarios cargar nuevas imágenes de perros y obtener predicciones de la raza en tiempo real, demostrando la utilidad práctica de nuestro proyecto de clasificación de razas de perros.

<img width="1519" height="632" alt="image" src="https://github.com/user-attachments/assets/cfd5c7a6-5ccf-41e3-8c52-bb7105c67c2e" />


## Interfaz Web y Experiencia de Usuario

La interfaz ha sido modernizada para ofrecer una experiencia fluida y profesional de tipo Single Page Application (SPA), estructurada de la siguiente manera:

- **Arquitectura del Frontend:** Desarrollada con React y Vite, lo que permite una navegación instantánea sin recargas de página.
- **Sistema de Navegación:** Una barra de navegación dinámica que permite el desplazamiento fluido hacia las secciones clave: Inicio, Funcionamiento y Noticias/Actualizaciones.
- **Área de Clasificación Interactiva:** Un contenedor central diseñado con bordes redondeados y sombras suaves donde el usuario puede cargar imágenes de forma intuitiva. Incluye estados visuales para la carga, el procesamiento de la IA y la presentación de resultados.
- **Resultados Detallados:** Al realizar una predicción, el sistema muestra la imagen procesada junto con la raza identificada y una descripción detallada de la misma, integrando la información del backend de forma visualmente atractiva.
- **Guía de Usuario:** Se incluyó una sección de "Pasos" que explica visualmente el flujo de trabajo: Carga de foto, Análisis de IA y Entrega de resultados.
- **Diseño e Identidad:** Estética inspirada en publicaciones editoriales modernas, utilizando la tipografía Nunito y una paleta de colores institucional con acentos vibrantes, manteniendo una decoración "Tadeista" en sus elementos gráficos.

## Resultados

En cuanto a la precisión obtuvimos un 96% de exactitud gracias a los datos de entrenamiento con su respectiva validación, lo que nos lleva a pocas pérdidas. Todo esto visible en las gráficas del proyecto.

<img width="2246" height="852" alt="image" src="https://github.com/user-attachments/assets/20be745b-fe73-47ee-b94d-dab7cff427f1" />


Para nuestra matriz de confusión obtuvimos resultados que nos indican que el modelo tiene un buena precisión de predicción, más que todo en las razas Beaguel, Border Terrier, Boston Bull, Boxer y Chow Chow, las confusiones de predicción fueron Bull francés con Chow chow, English springer con Cocker spaniel ingles, y Flat coated retriever con Golden Retriever, y Algunas razas como Siberian Husky, ShihTzu y Scotch Terrier tienen un menor número de muestras, lo que dificulta su clasificación precisa.

<img width="1066" height="662" alt="image" src="https://github.com/user-attachments/assets/26108110-c320-4ba3-810c-64f2f06af304" />


## Conclusiones

- La utilización de preentrenamientos para clasificar razas puede ser una técnica efectiva y prometedora para mejorar la precisión de los modelos de aprendizaje automático.
- La aplicación web aporta una interacción sencilla y efectiva con nuestro modelo para la clasificación de razas de perros.
- La selección cuidadosa de los modelos y técnicas de pre-entrenamiento puede ser clave para obtener resultados precisos y efectivos.
- Se puede lograr una alta precisión en la clasificación de razas utilizando técnicas de pre-entrenamiento combinadas con otras técnicas de aprendizaje automático, como la transferencia de aprendizaje.
- La inteligencia artificial supone un gran impacto en la vida cotidiana de las personas, haciendo tareas que un ser humano puede realizar, como en este caso, identificar la raza de un canino, incluyendo el hecho de que cualquier persona con una computadora pueda hacer este tipo de trabajos que pueden tener un gran peso en la sociedad.
