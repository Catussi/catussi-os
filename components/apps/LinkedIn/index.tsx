import { memo, useEffect } from "react";
import { LINKEDIN_PROFILE } from "components/apps/LinkedIn/profileData";
import StyledLinkedIn from "components/apps/LinkedIn/StyledLinkedIn";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";
import { useLinkHandler } from "hooks/useLinkHandler";

const LinkedIn: FC<ComponentProcessProps> = ({ id }) => {
  const { prependFileToTitle } = useTitle(id);
  const openLink = useLinkHandler();

  useEffect(() => {
    prependFileToTitle("LinkedIn · Catalina Barria Otto");
  }, [prependFileToTitle]);

  const onLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ): void => {
    openLink(event.nativeEvent, url, url);
  };

  return (
    <StyledLinkedIn>
      <div className="content">
        <section className="card">
          <div className="banner" aria-hidden="true" />
          <div className="profile-top">
            <div aria-hidden="true" className="avatar">
              CB
            </div>
            <h1>{LINKEDIN_PROFILE.name}</h1>
            <p className="headline">{LINKEDIN_PROFILE.headline}</p>
            <p className="location">{LINKEDIN_PROFILE.location}</p>
          </div>
        </section>

        <section className="card section">
          <h2>Acerca de</h2>
          <p>{LINKEDIN_PROFILE.about}</p>
        </section>

        <section className="card section">
          <h2>Experiencia</h2>
          {LINKEDIN_PROFILE.experience.map((role) => (
            <article className="role" key={`${role.company}-${role.role}`}>
              <h3>{role.role}</h3>
              <p className="company">{role.company}</p>
              <p className="period">{role.period}</p>
              {role.bullets && (
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        <section className="card section">
          <h2>Proyectos</h2>
          {LINKEDIN_PROFILE.projects.map((project) => (
            <article className="project" key={project.title}>
              <h3>{project.title}</h3>
              {project.description && <p>{project.description}</p>}
              {project.links && (
                <div className="links">
                  {project.links.map((link) => (
                    <a
                      href={link.url}
                      key={link.url}
                      onClick={(event) => onLinkClick(event, link.url)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="card section">
          <h2>Habilidades</h2>
          <div className="skills">
            {LINKEDIN_PROFILE.skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="card section contact">
          <h2>Contacto</h2>
          <p>
            <a
              href={`mailto:${LINKEDIN_PROFILE.contact.email}`}
              onClick={(event) =>
                onLinkClick(event, `mailto:${LINKEDIN_PROFILE.contact.email}`)
              }
            >
              {LINKEDIN_PROFILE.contact.email}
            </a>
          </p>
          <p>
            <a
              href={LINKEDIN_PROFILE.contact.github}
              onClick={(event) =>
                onLinkClick(event, LINKEDIN_PROFILE.contact.github)
              }
            >
              GitHub @Catussi
            </a>
            {" · "}
            <a
              href={LINKEDIN_PROFILE.contact.portfolio}
              onClick={(event) =>
                onLinkClick(event, LINKEDIN_PROFILE.contact.portfolio)
              }
            >
              catussi-os.vercel.app
            </a>
          </p>
        </section>
      </div>
    </StyledLinkedIn>
  );
};

export default memo(LinkedIn);
