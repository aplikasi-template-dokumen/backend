--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO admin;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    "order" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO admin;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO admin;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: documents; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.documents (
    id integer NOT NULL,
    user_id integer,
    title character varying(255),
    data json,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.documents OWNER TO admin;

--
-- Name: documents_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.documents_id_seq OWNER TO admin;

--
-- Name: documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.documents_id_seq OWNED BY public.documents.id;


--
-- Name: languages; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.languages (
    id integer NOT NULL,
    name character varying(255),
    "order" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.languages OWNER TO admin;

--
-- Name: languages_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.languages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.languages_id_seq OWNER TO admin;

--
-- Name: languages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.languages_id_seq OWNED BY public.languages.id;


--
-- Name: occupations; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.occupations (
    id integer NOT NULL,
    name character varying(255),
    "order" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.occupations OWNER TO admin;

--
-- Name: occupations_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.occupations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.occupations_id_seq OWNER TO admin;

--
-- Name: occupations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.occupations_id_seq OWNED BY public.occupations.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255),
    "order" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO admin;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO admin;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: sub_categories; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.sub_categories (
    id integer NOT NULL,
    category_id integer,
    name character varying(255),
    "order" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.sub_categories OWNER TO admin;

--
-- Name: sub_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.sub_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sub_categories_id_seq OWNER TO admin;

--
-- Name: sub_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.sub_categories_id_seq OWNED BY public.sub_categories.id;


--
-- Name: submission_statuses; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.submission_statuses (
    id integer NOT NULL,
    name character varying(255),
    "order" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.submission_statuses OWNER TO admin;

--
-- Name: submission_statuses_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.submission_statuses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.submission_statuses_id_seq OWNER TO admin;

--
-- Name: submission_statuses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.submission_statuses_id_seq OWNED BY public.submission_statuses.id;


--
-- Name: templates; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.templates (
    id integer NOT NULL,
    title character varying(255),
    "desc" character varying(255),
    lang_id integer,
    cat_id integer,
    sub_cat_id integer,
    img character varying(255),
    notes character varying(255),
    data json,
    status_id integer,
    contributor_id integer,
    reviewer_id integer,
    publish_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.templates OWNER TO admin;

--
-- Name: templates_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.templates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.templates_id_seq OWNER TO admin;

--
-- Name: templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.templates_id_seq OWNED BY public.templates.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users (
    id integer NOT NULL,
    role integer,
    email character varying(255),
    full_name character varying(255),
    username character varying(255),
    occupation_id integer,
    password character varying(255),
    profile_img character varying(255),
    affiliation character varying(255),
    reviewer_id integer,
    enable boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO admin;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO admin;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: documents id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.documents ALTER COLUMN id SET DEFAULT nextval('public.documents_id_seq'::regclass);


--
-- Name: languages id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.languages ALTER COLUMN id SET DEFAULT nextval('public.languages_id_seq'::regclass);


--
-- Name: occupations id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.occupations ALTER COLUMN id SET DEFAULT nextval('public.occupations_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: sub_categories id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sub_categories ALTER COLUMN id SET DEFAULT nextval('public.sub_categories_id_seq'::regclass);


--
-- Name: submission_statuses id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.submission_statuses ALTER COLUMN id SET DEFAULT nextval('public.submission_statuses_id_seq'::regclass);


--
-- Name: templates id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.templates ALTER COLUMN id SET DEFAULT nextval('public.templates_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."SequelizeMeta" (name) FROM stdin;
20221108065033-create-categories.js
20221108065415-create-languages.js
20221108065549-create-submission-status.js
20221108065721-create-occupations.js
20221108065830-create-sub-categories.js
20221108074854-create-documents.js
20221108082447-create-templates.js
20221109075819-create-role.js
20221108081643-create-users.js
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.categories (id, name, "order", "createdAt", "updatedAt") FROM stdin;
1	Surat	1	2022-11-16 14:40:03.811+07	2022-11-16 14:40:03.811+07
2	Proposal	2	2022-11-16 14:40:24.821+07	2022-11-16 14:40:24.821+07
3	Laporan	3	2022-11-16 14:40:31.99+07	2022-11-16 14:40:31.99+07
4	Tugas	4	2022-11-16 14:40:37.744+07	2022-11-16 14:40:37.744+07
7	Karya Tulis Ilmiah	5	2022-11-17 10:54:45.959+07	2022-11-17 10:54:45.959+07
\.


--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.documents (id, user_id, title, data, "createdAt", "updatedAt") FROM stdin;
13	1	Surat Rekomendasi	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 6 - Surat Rekomendasi"},{"insert":"\\n\\nBy 'rms'\\n"}]}	2022-12-03 01:00:31.843+07	2022-12-03 01:00:31.843+07
3	1	Laporan Magang	{"ops":[{"attributes":{"bold":true},"insert":"BAB I"},{"attributes":{"align":"center"},"insert":"\\n"},{"attributes":{"bold":true},"insert":"PENDAHULUAN"},{"attributes":{"align":"center"},"insert":"\\n\\n"},{"attributes":{"align":"justify"},"insert":"\\n"},{"attributes":{"bold":true},"insert":"1.1"},{"insert":"\\t"},{"attributes":{"bold":true},"insert":"Latar Belakang"},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan arcu vel commodo varius. Integer vitae tincidunt mi. Morbi et velit in enim eleifend convallis id vitae velit. Nam neque ex, ullamcorper vitae porta id, dignissim ut diam. Sed egestas massa ex. Quisque eu pharetra felis, id tristique felis."},{"attributes":{"align":"justify"},"insert":"\\n\\n"},{"insert":"Donec hendrerit luctus nunc, a pharetra mauris gravida quis. Integer facilisis lectus vitae vehicula faucibus. Morbi eget mauris ornare ante rutrum sodales. Praesent sagittis sem enim, nec egestas libero cursus a."},{"attributes":{"align":"justify"},"insert":"\\n\\n"},{"attributes":{"bold":true},"insert":"1.2"},{"insert":"\\t"},{"attributes":{"bold":true},"insert":"Rumusan Masalah"},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"Nullam pellentesque varius molestie."},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"a. Praesent volutpat?"},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"b. Nulla efficitur?"},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"c. Cras non orci tortor?"},{"attributes":{"align":"justify"},"insert":"\\n\\n"},{"attributes":{"bold":true},"insert":"1.3"},{"insert":"\\t"},{"attributes":{"bold":true},"insert":"Tujuan"},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"Nullam pellentesque varius molestie."},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"a. Praesent volutpat?"},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"b. Nulla efficitur?"},{"attributes":{"align":"justify"},"insert":"\\n"},{"insert":"c. Cras non orci tortor?"},{"attributes":{"align":"justify"},"insert":"\\n"}]}	2022-11-18 09:27:52.343+07	2022-12-05 10:20:26.181+07
15	1	Laporan Kegiatan	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 11 - Laporan Kegiatan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	2022-12-05 11:47:44.642+07	2022-12-05 11:47:44.642+07
\.


--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.languages (id, name, "order", "createdAt", "updatedAt") FROM stdin;
1	Indonesia	1	2022-11-17 11:08:34.492+07	2022-11-17 11:08:34.492+07
2	Inggris	2	2022-11-17 11:08:49.641+07	2022-11-17 11:08:49.641+07
\.


--
-- Data for Name: occupations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.occupations (id, name, "order", "createdAt", "updatedAt") FROM stdin;
1	Pelajar	1	2022-11-29 12:41:50.668+07	2022-11-29 12:41:50.668+07
2	Mahasiswa	2	2022-11-29 12:42:10.535+07	2022-11-29 12:42:10.535+07
3	Guru	3	2022-11-29 12:42:14.939+07	2022-11-29 12:42:14.939+07
4	Dosen	4	2022-11-29 12:42:20.059+07	2022-11-29 12:42:20.059+07
5	Lainnya	5	2022-11-29 12:42:27.31+07	2022-11-29 12:42:27.31+07
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.roles (id, name, "order", "createdAt", "updatedAt") FROM stdin;
1	User	1	2022-11-17 10:48:37.068+07	2022-11-17 10:48:37.068+07
2	Contributor	2	2022-11-17 10:48:58.197+07	2022-11-17 10:48:58.197+07
3	Reviewer	3	2022-11-17 10:49:33.257+07	2022-11-17 10:49:33.257+07
4	Admin	4	2022-11-17 10:50:25.816+07	2022-11-17 10:50:25.816+07
\.


--
-- Data for Name: sub_categories; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.sub_categories (id, category_id, name, "order", "createdAt", "updatedAt") FROM stdin;
2	1	Surat Izin	1	2022-11-17 13:55:54.181+07	2022-11-17 13:55:54.181+07
3	1	Surat Keputusan	2	2022-11-17 13:56:27.399+07	2022-11-17 13:56:27.399+07
4	1	Surat Lamaran Pekerjaan	3	2022-11-17 13:56:36.921+07	2022-11-17 13:56:36.921+07
5	1	Surat Pemberitahuan	4	2022-11-17 13:56:48.193+07	2022-11-17 13:56:48.193+07
6	1	Surat Peminjaman	5	2022-11-17 13:57:01.433+07	2022-11-17 13:57:01.433+07
7	1	Surat Rekomendasi	6	2022-11-17 13:57:10.675+07	2022-11-17 13:57:10.675+07
8	1	Surat Undangan	7	2022-11-17 13:57:26.585+07	2022-11-17 13:57:26.585+07
9	2	Proposal Kegiatan	1	2022-11-17 13:57:46.482+07	2022-11-17 13:57:46.482+07
10	2	Proposal Penelitian	2	2022-11-17 13:58:07.953+07	2022-11-17 13:58:07.953+07
11	2	Proposal Sponsorship	3	2022-11-17 13:58:17.757+07	2022-11-17 13:58:17.757+07
12	3	Laporan Kegiatan	1	2022-11-17 13:59:33.563+07	2022-11-17 13:59:33.563+07
13	3	Laporan Penelitian	2	2022-11-17 13:59:43.477+07	2022-11-17 13:59:43.477+07
14	3	Laporan Periodik	3	2022-11-17 13:59:50.456+07	2022-11-17 13:59:50.456+07
15	3	Laporan Praktikum	4	2022-11-17 14:00:03.379+07	2022-11-17 14:00:03.379+07
16	4	Esai	1	2022-11-17 14:00:19.765+07	2022-11-17 14:00:19.765+07
17	4	Resensi	2	2022-11-17 14:00:29.708+07	2022-11-17 14:00:29.708+07
18	4	Resume	3	2022-11-17 14:00:35.694+07	2022-11-17 14:00:35.694+07
19	4	Karangan	4	2022-11-17 14:00:47.851+07	2022-11-17 14:00:47.851+07
20	7	Artikel	1	2022-11-17 14:01:49.098+07	2022-11-17 14:01:49.098+07
21	7	Makalah	2	2022-11-17 14:01:56.826+07	2022-11-17 14:01:56.826+07
22	7	Paper	3	2022-11-17 14:02:01.35+07	2022-11-17 14:02:01.35+07
\.


--
-- Data for Name: submission_statuses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.submission_statuses (id, name, "order", "createdAt", "updatedAt") FROM stdin;
1	Draft	1	2022-11-17 14:33:06.271+07	2022-11-17 14:33:06.271+07
2	Submitted	2	2022-11-17 14:34:17.293+07	2022-11-17 14:34:17.293+07
3	Revision	3	2022-11-17 14:34:58.483+07	2022-11-17 14:34:58.483+07
4	Published	4	2022-11-17 14:35:09.375+07	2022-11-17 14:35:09.375+07
6	Rejected	5	2022-12-02 13:49:57.483+07	2022-12-02 13:49:57.483+07
\.


--
-- Data for Name: templates; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.templates (id, title, "desc", lang_id, cat_id, sub_cat_id, img, notes, data, status_id, contributor_id, reviewer_id, publish_date, "createdAt", "updatedAt") FROM stdin;
12	Proposal Sponsorship	Sample untuk integrasi API	1	2	11	/img-proposal.png	\N	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 10 - Proposal Sponsorship"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	\N	2022-12-05 11:49:10.943+07	2022-11-24 15:30:09.165+07	2022-12-05 11:49:11.059+07
3	Template	Sample untuk integrasi API	1	1	2	/img-surat.png	Ajuan ditolak, ini hanya sample (reviewer)	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 1 - Surat Izin"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	2022-12-04 02:34:11.665+07	2022-11-24 15:23:29.562+07	2022-12-04 02:34:11.79+07
6	Surat Pemberitahuan	Sample untuk integrasi API	1	1	2	/img-surat.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 4 - Surat Pemberitahuan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	2	1	\N	\N	2022-11-24 15:25:06.67+07	2022-12-09 21:10:03.047+07
8	Surat Rekomendasi	Sample untuk integrasi API	1	1	7	/img-surat.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 6 - Surat Rekomendasi"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:27:56.061+07	2022-11-24 15:27:56.061+07
9	Surat Undangan	Sample untuk integrasi API	1	1	8	/img-surat.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 7 - Surat Undangan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:28:34.036+07	2022-11-24 15:28:34.036+07
11	Proposal Penelitian	Sample untuk integrasi API	1	2	10	/img-proposal.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 9 - Proposal Penelitian"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:29:42.46+07	2022-11-24 15:29:42.46+07
15	Laporan Periodik	Sample untuk integrasi API	1	3	14	/img-laporan.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 13 - Laporan Periodik"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:32:11.308+07	2022-11-24 15:32:11.308+07
16	Laporan Praktikum	Sample untuk integrasi API	1	3	15	/img-laporan.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 13 - Laporan Praktikum"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:32:28.343+07	2022-11-24 15:32:28.343+07
17	Esai	Sample untuk integrasi API	1	4	16	/img-tugas.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 15 - Esai"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:33:32.943+07	2022-11-24 15:33:32.943+07
18	Resensi	Sample untuk integrasi API	1	4	17	/img-tugas.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 16 - Resensi"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:34:17.839+07	2022-11-24 15:34:17.839+07
20	Karangan	Sample untuk integrasi API	1	4	19	/img-tugas.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 18 - Karangan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:34:50.434+07	2022-11-24 15:34:50.434+07
22	Makalah	Sample untuk integrasi API	1	5	21	/img-karya-tulis.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 20 - Makalah"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:35:51.545+07	2022-11-24 15:35:51.545+07
23	Paper	Sample untuk integrasi API	1	5	22	/img-karya-tulis.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 21 - Paper"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-24 15:36:14.117+07	2022-11-24 15:36:14.117+07
24	Paper dua	Sample untuk integrasi API	1	5	22	/img-karya-tulis.png	Masih sample	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 21 - Paper"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	\N	2022-11-28 14:08:50.581+07	2022-11-28 14:08:50.581+07
10	Proposal Kegiatan	Sample untuk integrasi API	1	2	9	/img-proposal.png	Sample ok (reviewer)	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 8 - Proposal Kegiatan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	\N	2022-12-04 11:10:54.407+07	2022-11-24 15:29:16.476+07	2022-12-04 11:10:54.424+07
5	Surat Lamaran Pekerjaan	Sample untuk integrasi API	1	1	4	/img-surat.png	\N	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 3 - Surat Lamaran Pekerjaan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	\N	2022-12-05 09:40:28.727+07	2022-11-24 15:24:41.01+07	2022-12-05 09:40:29.087+07
4	Surat Keputusan	Sample untuk integrasi API	1	1	3	/img-surat.png	\N	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 2 - Surat Keputusan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	1	2022-12-08 21:18:08.702+07	2022-11-24 15:24:14.265+07	2022-12-08 21:18:08.704+07
14	Laporan Penelitian	Sample untuk integrasi API	1	3	13	https://res.cloudinary.com/djzvshfzq/image/upload/v1670580349/template_images/1670580347090.png	Ok, saya acc (reviewer)	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 12 - Laporan Penelitian"},{"insert":"\\n\\nBy 'rms'\\n"}]}	1	1	\N	2022-12-09 17:08:56.964+07	2022-11-24 15:31:49.154+07	2022-12-09 21:58:53.449+07
7	Surat Peminjaman	Sample untuk integrasi API	1	1	6	/img-surat.png	Sample ok	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 5 - Surat Peminjaman"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	\N	2022-12-04 02:10:31.402+07	2022-11-24 15:27:34.865+07	2022-12-04 02:10:31.425+07
19	Resume	Sample untuk integrasi API	1	4	18	/img-tugas.png	\N	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 17 - Resume"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	\N	2022-12-05 09:40:34.282+07	2022-11-24 15:34:32.271+07	2022-12-05 09:40:34.293+07
21	Artikel	Sample untuk integrasi API	1	7	20	/img-karya-tulis.png	\N	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 19 - Artikel"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	\N	2022-12-05 09:40:40.096+07	2022-11-24 15:35:24.8+07	2022-12-05 09:40:40.105+07
27	Tes Lagi	aaa	1	1	2	https://res.cloudinary.com/djzvshfzq/image/upload/v1670577698/template_images/1670577691022.jpg	aaa	{"ops":[{"insert":"Abc\\n"}]}	1	1	\N	\N	2022-12-07 15:41:31.13+07	2022-12-09 17:00:42.141+07
13	Laporan Kegiatan	Sample untuk integrasi API	1	3	12	/img-laporan.png	\N	{"ops":[{"attributes":{"bold":true},"insert":"Sample Template 11 - Laporan Kegiatan"},{"insert":"\\n\\nBy 'rms'\\n"}]}	4	1	\N	2022-12-05 09:40:54.86+07	2022-11-24 15:31:11.674+07	2022-12-05 09:40:54.87+07
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.users (id, role, email, full_name, username, occupation_id, password, profile_img, affiliation, reviewer_id, enable, "createdAt", "updatedAt") FROM stdin;
2	1	rumika@gmail.com	Rumika Damayanti	rumikadms	1	$2b$10$VguR5tGPTbSuqQNELRHHPeuNIaO8jwA8pOat6nYvcmal12F45WkH2	\N	Politeknik Negeri Jakarta	\N	t	2022-12-06 10:33:51.114+07	2022-12-06 10:33:51.114+07
3	1	rumika@gmail.com	Rumika Damayanti	rumikadms	1	$2b$10$/nWGcTcB6F98nH69BDQAnu2nb3yc0yVLrz.OuXiPv1q86ioLU6bJq	\N	Politeknik Negeri Jakarta	\N	t	2022-12-06 10:34:46.664+07	2022-12-06 10:34:46.664+07
1	1	rahma.maulida68@gmail.com	Rahma Maulida Shaliha	rahmams	2	$2b$10$KMR9KA1mp9YeqirxCSxy0e4909O1b/ph37U94JmcXrnP66OP1O222	https://res.cloudinary.com/djzvshfzq/image/upload/v1670402306/images/1670402302112.jpg	Politeknik Negeri Jakarta	\N	t	2022-12-06 10:29:39.378+07	2022-12-09 22:10:08.301+07
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.categories_id_seq', 7, true);


--
-- Name: documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.documents_id_seq', 15, true);


--
-- Name: languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.languages_id_seq', 3, true);


--
-- Name: occupations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.occupations_id_seq', 5, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.roles_id_seq', 5, true);


--
-- Name: sub_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.sub_categories_id_seq', 23, true);


--
-- Name: submission_statuses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.submission_statuses_id_seq', 6, true);


--
-- Name: templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.templates_id_seq', 27, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (id);


--
-- Name: languages languages_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);


--
-- Name: occupations occupations_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.occupations
    ADD CONSTRAINT occupations_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: sub_categories sub_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sub_categories
    ADD CONSTRAINT sub_categories_pkey PRIMARY KEY (id);


--
-- Name: submission_statuses submission_statuses_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.submission_statuses
    ADD CONSTRAINT submission_statuses_pkey PRIMARY KEY (id);


--
-- Name: templates templates_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.templates
    ADD CONSTRAINT templates_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

