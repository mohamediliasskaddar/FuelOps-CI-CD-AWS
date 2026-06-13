package ma.fstt.gestionstation.repository;

import ma.fstt.gestionstation.entity.Carburant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarburantRepository extends JpaRepository<Carburant,Long> {
    List<Carburant> findByNomContainingIgnoreCase(String nom);

}
