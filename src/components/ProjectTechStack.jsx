import { Icon } from 'astro-icon';

export default function ProjectTechStack({ stack }) {
  const tech = stack.map((x) => (
    <Icon pack="logos" name={x.name} class="h-6 w-6" />
  ));
  return <ul>{tech}</ul>;
}
