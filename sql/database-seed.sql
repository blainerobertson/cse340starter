CREATE TABLE welcome
(
    welcomeId SERIAL,
    class_num text,
    class_name text,
    class_message text,
    CONSTRAINT welcome_pkey PRIMARY KEY (welcomeId)
);

INSERT INTO welcome (class_num, class_name, class_message) VALUES
 ('CSE 340','Web Backend Development','Welcome to our class. We will focus on the backend (node, express and postgreSQL), along with Docker containers, Git and deployment. However, we will also include a fair amount of front-end (HTML, CSS, JS), because a backend is not much good without a delivery mechanism. I hope you will learn a lot and enjoy our class.');