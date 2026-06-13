package ma.fstt.gestionstation.repository;

import ma.fstt.gestionstation.entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StationRepository extends JpaRepository<Station,Long> {
    List<Station> findByVille(String ville);
}
